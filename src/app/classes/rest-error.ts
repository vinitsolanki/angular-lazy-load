import {RestResponse} from './rest-response';

export class RestError {
    public displayMessage: string;
    public developerMessage: string;
    public code: string;

    constructor(displayMessage: string, developerMessage: string, code: string) {
        this.displayMessage = displayMessage;
        this.developerMessage = developerMessage;
        this.code = code;
    }

    public static getErrors<T>(response: RestResponse<T>): Array<RestError> {
        return response.errors;
    }
}
