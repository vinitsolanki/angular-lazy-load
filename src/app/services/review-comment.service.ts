import { PullRequest } from '../classes/pull-request';
import { Injectable } from '@angular/core';
import { ErrorService } from './error.service';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RestResponse } from '../classes/rest-response';
import { catchError, map } from 'rxjs/operators';
import { ReviewComment } from '../classes/review-comment';

@Injectable()
export class ReviewCommentService extends DataService<ReviewComment> {
    constructor(public readonly http: HttpClient, public readonly errorService: ErrorService) {
        super(http, errorService, `/review-comments`);
    }

    public getAll$(): Observable<RestResponse<ReviewComment>> {
        return this.find$({}).pipe(
            catchError(this.errorService.handleError('review-comments')),
            map((response: RestResponse<ReviewComment>) => {
                return response;
            })
        );
    }
}