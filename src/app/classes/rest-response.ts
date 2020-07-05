import { RestError } from './rest-error';
import { RestRequest } from './rest-request';

export class RestResponse<T> {
    private _request: RestRequest;
    private _data: Array<T>;
    private _errors: Array<RestError>;
    private _warnings: Array<RestError>;
    private _pageIndex: number;
    private _pageSize: number;
    private _pageCount: number;
    private _totalRows: number;

    constructor(request: RestRequest, data: Array<T>, errors: Array<RestError>, warnings?: Array<RestError>) {
        this._request = request;
        this._data = data;
        this._errors = errors;
        this._warnings = warnings;
    }


    /**
     * Getter request
     * @return {RestRequest}
     */
    public get request(): RestRequest {
        return this._request;
    }

    /**
     * Getter data
     * @return {Array<T>}
     */
    public get data(): Array<T> {
        return this._data;
    }

    /**
     * Getter errors
     * @return {Array<RestError>}
     */
    public get errors(): Array<RestError> {
        return this._errors;
    }

    /**
     * Getter warnings
     * @return {Array<RestError>}
     */
    public get warnings(): Array<RestError> {
        return this._warnings;
    }

    /**
     * Getter pageIndex
     * @return {number}
     */
    public get pageIndex(): number {
        return this._pageIndex;
    }

    /**
     * Getter pageSize
     * @return {number}
     */
    public get pageSize(): number {
        return this._pageSize;
    }

    /**
     * Getter pageCount
     * @return {number}
     */
    public get pageCount(): number {
        return this._pageCount;
    }

    /**
     * Getter totalRows
     * @return {number}
     */
    public get totalRows(): number {
        return this._totalRows;
    }

    /**
     * Setter request
     * @param {RestRequest} value
     */
    public set request(value: RestRequest) {
        this._request = value;
    }

    /**
     * Setter data
     * @param {Array<T>} value
     */
    public set data(value: Array<T>) {
        this._data = value;
    }

    /**
     * Setter errors
     * @param {Array<RestError>} value
     */
    public set errors(value: Array<RestError>) {
        this._errors = value;
    }

    /**
     * Setter warnings
     * @param {Array<RestError>} value
     */
    public set warnings(value: Array<RestError>) {
        this._warnings = value;
    }

    /**
     * Setter pageIndex
     * @param {number} value
     */
    public set pageIndex(value: number) {
        this._pageIndex = value;
    }

    /**
     * Setter pageSize
     * @param {number} value
     */
    public set pageSize(value: number) {
        this._pageSize = value;
    }

    /**
     * Setter pageCount
     * @param {number} value
     */
    public set pageCount(value: number) {
        this._pageCount = value;
    }

    /**
     * Setter totalRows
     * @param {number} value
     */
    public set totalRows(value: number) {
        this._totalRows = value;
    }


}
