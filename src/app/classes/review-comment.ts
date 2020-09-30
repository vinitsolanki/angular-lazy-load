import { PullRequest } from './pull-request';
import { Developer } from './developer';
import { SeverityEnum } from '../enums/severity-enum';

export class ReviewComment {

    private _id: number;
    private _externalId: number;
    private _pullRequest: PullRequest;
    private _commentedBy: Developer;
    private _commentBody: string;
    private _severity: SeverityEnum;
    private _createdDate: Date;
    private _updatedDate: Date;

    /**
     * Getter id
     * @return {number}
     */
    public get id(): number {
        return this._id;
    }

    /**
     * Getter externalId
     * @return {number}
     */
    public get externalId(): number {
        return this._externalId;
    }

    /**
     * Getter pullRequest
     * @return {PullRequest}
     */
    public get pullRequest(): PullRequest {
        return this._pullRequest;
    }

    /**
     * Getter commentedBy
     * @return {Developer}
     */
    public get commentedBy(): Developer {
        return this._commentedBy;
    }

    /**
     * Getter commentBody
     * @return {string}
     */
    public get commentBody(): string {
        return this._commentBody;
    }

    /**
     * Getter severity
     * @return {SeverityEnum}
     */
    public get severity(): SeverityEnum {
        return this._severity;
    }

    /**
     * Getter createdDate
     * @return {Date}
     */
    public get createdDate(): Date {
        return this._createdDate;
    }

    /**
     * Getter updatedDate
     * @return {Date}
     */
    public get updatedDate(): Date {
        return this._updatedDate;
    }

    /**
     * Setter id
     * @param {number} value
     */
    public set id(value: number) {
        this._id = value;
    }

    /**
     * Setter externalId
     * @param {number} value
     */
    public set externalId(value: number) {
        this._externalId = value;
    }

    /**
     * Setter pullRequest
     * @param {PullRequest} value
     */
    public set pullRequest(value: PullRequest) {
        this._pullRequest = value;
    }

    /**
     * Setter commentedBy
     * @param {Developer} value
     */
    public set commentedBy(value: Developer) {
        this._commentedBy = value;
    }

    /**
     * Setter commentBody
     * @param {string} value
     */
    public set commentBody(value: string) {
        this._commentBody = value;
    }

    /**
     * Setter severity
     * @param {SeverityEnum} value
     */
    public set severity(value: SeverityEnum) {
        this._severity = value;
    }

    /**
     * Setter createdDate
     * @param {Date} value
     */
    public set createdDate(value: Date) {
        this._createdDate = value;
    }

    /**
     * Setter updatedDate
     * @param {Date} value
     */
    public set updatedDate(value: Date) {
        this._updatedDate = value;
    }


}