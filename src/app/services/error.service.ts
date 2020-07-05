import {HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Observable, of } from 'rxjs';
import {RestError} from '../classes/rest-error';
import {RestResponse} from '../classes/rest-response';

@Injectable({
    providedIn: 'root'
})
export class ErrorService {
    public static readonly defaultErrorMessage =
        'Oops, an error occured, please try again or contact us for more information';

    constructor() {}

    public handleError<T>(operation: string) {
        return (httpErrorResponse: HttpErrorResponse): Observable<RestResponse<T>> => {
            const errorObj = httpErrorResponse.error;
            if (errorObj.request) {
                return of(new RestResponse(errorObj.request, errorObj.data, errorObj.errors, errorObj.warnings));
            } else {
                console.error(`error while processing ${operation} operation :` + JSON.stringify(httpErrorResponse));
                const defaultError = new RestError(
                    ErrorService.defaultErrorMessage,
                    null,
                    httpErrorResponse.status.toString()
                );

                return of(new RestResponse(null, null, [defaultError], null));
            }
        };
    }
}
