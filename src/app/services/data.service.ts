import { Observable, Subject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { RestResponse } from '../classes/rest-response';
import { ErrorService } from './error.service';
import {HttpHeaders, HttpParams, HttpClient} from '@angular/common/http';

export interface IRestParameters<T> {
    parentIds?: Array<string | number>;
    path?: string;
    id?: string | number;
    subPath?: string;
    params?: HttpParams;
    dto?: T;
    options?: IRestOptions;
}

export interface IRestOptions {
    headers?: HttpHeaders | { [header: string]: string | Array<string> };
    observe?: 'body';
    params?: HttpParams | { [param: string]: string | Array<string> };
    reportProgress?: boolean;
    withCredentials?: boolean;
}

export abstract class DataService<T> {
    /**
     * Any options we want to always include with every API call
     */
    get defaultOptions(): IRestOptions {
        return {};
    }

    /**
     * Get snapshot for entity current "list"
     * Example "All Markets" or "All Advertisers"
     */
    public get list(): Array<T> {
        return this._list;
    }

    /**
     * Set entity current "list"
     * Example "All Markets" or "All Advertisers"
     */
    public set list(list: Array<T>) {
        this._list$.next(list);
        this._list = list;
    }

    /**
     * Observable of entity current "list"
     */
    public get list$(): Observable<Array<T>> {
        return this._list$.asObservable();
    }

    /**
     * Get snapshot for current selected entity
     */
    public get current(): T {
        return this._current;
    }

    /**
     * Set current selected entity
     */
    public set current(item: T) {
        this._current$.next(item);
        this._current = item;
    }

    /**
     * Observable of current selected entity
     */
    public get current$(): Observable<T> {
        return this._current$.asObservable();
    }
    protected readonly apiDomain = environment.apiUrl;
    private _list: Array<T>;
    private readonly _list$: Subject<Array<T>> = new Subject();
    private _current: T;
    private readonly _current$: Subject<T> = new Subject();

    constructor(public http: HttpClient, public errorService: ErrorService, private readonly defaultPath = '') { }

    protected find$(args?: IRestParameters<T>): Observable<RestResponse<T>> {
        const path = this.getRestPath(args);
        const requestOptions = this.getOptions(args);
        return this.http.get(this.apiDomain + path, requestOptions).pipe(
            catchError(this.errorService.handleError('get')),
            map((response: RestResponse<T>) => response)
        );
    }

    protected create$(args?: IRestParameters<T>): Observable<RestResponse<T>> {
        if (!args || !args.dto) {
            throw Error('A Dto is required for entity creation');
        }
        const path = this.getRestPath(args);

        return this.http.post(this.apiDomain + path, args.dto, this.getOptions(args)).pipe(
            catchError(this.errorService.handleError('create')),
            map((response: RestResponse<T>) => response)
        );
    }

    protected delete$(args?: IRestParameters<T>): Observable<RestResponse<T>> {
        if (!args || !args.id) {
            throw Error('An ID is required for entity deletion');
        }
        const path = this.getRestPath(args);

        return this.http.delete(this.apiDomain + path, this.getOptions(args)).pipe(
            catchError(this.errorService.handleError('delete')),
            map((response: RestResponse<T>) => response)
        );
    }

    protected update$(args?: IRestParameters<T>): Observable<RestResponse<T>> {
        if (!args || !args.dto) {
            throw Error('A Dto is required for entity udpate');
        }
        const path = this.getRestPath(args);

        return this.http.put(this.apiDomain + path, args.dto, this.getOptions(args)).pipe(
            catchError(this.errorService.handleError('update')),
            map((response: RestResponse<T>) => response)
        );
    }

    private getRestPath(args?: IRestParameters<T>): string {
        if (!args) { return this.defaultPath; }

        const { parentIds: orderedParentIds, path, id, subPath } = args;
        const orderedParentPath = orderedParentIds ? `/${orderedParentIds.join('/')}` : '';
        const currentPath = path || this.defaultPath;
        const currentId = id ? `/${id}` : '';
        const currentSubPath = subPath || '';

        return `${orderedParentPath}${currentPath}${currentId}${currentSubPath}`;
    }

     private getOptions(args?: IRestParameters<T>): IRestOptions {
        let returnedRestOptions: IRestOptions = {};
        if (args && args.params) {
            returnedRestOptions = Object.assign({ params: args.params, ...this.defaultOptions }) as IRestOptions;
        }

        if (args && args.options) {
            returnedRestOptions = Object.assign(returnedRestOptions, args.options);
        }

        return returnedRestOptions;
    }
}
