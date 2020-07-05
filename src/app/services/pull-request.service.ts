import { PullRequest } from '../classes/pull-request';
import { Injectable } from '@angular/core';
import { ErrorService } from './error.service';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RestResponse } from '../classes/rest-response';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class PullRequestService extends DataService<PullRequest> {
    constructor(public readonly http: HttpClient, public readonly errorService: ErrorService) {
        super(http, errorService, `/pullrequests`);
    }

    public getAll$(): Observable<RestResponse<PullRequest>> {
        return this.find$({}).pipe(
            catchError(this.errorService.handleError('pullrequests')),
            map((response: RestResponse<PullRequest>) => {
                return response;
            })
        );
    }
}