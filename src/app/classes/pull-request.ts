import { Developer } from './developer';
import { ReviewComment } from './review-comment';

export class PullRequest {
    public _id: number;
    private _externalId: number;
    private _jiraTickets: Array<string>;
    private _title: string;
    private _repositoryName: string;
    private _author: Developer;
    private _fromBranch: string;
    private _toBranch: string;
    private _reviewers: Array<Developer>;
    private _reviewComments: Array<ReviewComment>;
    private _status: string;
    private _approvals: Array<Developer>;
    private _rejects: Array<Developer>;
    private _mergedBy: Developer;
    private _createdDate: Date;
    private _updatedDate: Date;

    /**
     * Getter externalId
     * @return {number}
     */
    public get externalId(): number {
        return this._externalId;
    }

    /**
     * Getter jiraTickets
     * @return {Array<string>}
     */
    public get jiraTickets(): Array<string> {
        return this._jiraTickets;
    }

    /**
     * Getter title
     * @return {string}
     */
    public get title(): string {
        return this._title;
    }

    /**
     * Getter repositoryName
     * @return {string}
     */
    public get repositoryName(): string {
        return this._repositoryName;
    }

    /**
     * Getter author
     * @return {Developer}
     */
    public get author(): Developer {
        return this._author;
    }

    /**
     * Getter fromBranch
     * @return {string}
     */
    public get fromBranch(): string {
        return this._fromBranch;
    }

    /**
     * Getter toBranch
     * @return {string}
     */
    public get toBranch(): string {
        return this._toBranch;
    }

    /**
     * Getter reviewers
     * @return {Array<Developer>}
     */
    public get reviewers(): Array<Developer> {
        return this._reviewers;
    }

    /**
     * Getter reviewComments
     * @return {Array<ReviewComment>}
     */
    public get reviewComments(): Array<ReviewComment> {
        return this._reviewComments;
    }

    /**
     * Getter status
     * @return {string}
     */
    public get status(): string {
        return this._status;
    }

    /**
     * Getter approvals
     * @return {Array<Developer>}
     */
    public get approvals(): Array<Developer> {
        return this._approvals;
    }

    /**
     * Getter rejects
     * @return {Array<Developer>}
     */
    public get rejects(): Array<Developer> {
        return this._rejects;
    }

    /**
     * Getter mergedBy
     * @return {Developer}
     */
    public get mergedBy(): Developer {
        return this._mergedBy;
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
     * Setter externalId
     * @param {number} value
     */
    public set externalId(value: number) {
        this._externalId = value;
    }

    /**
     * Setter jiraTickets
     * @param {Array<string>} value
     */
    public set jiraTickets(value: Array<string>) {
        this._jiraTickets = value;
    }

    /**
     * Setter title
     * @param {string} value
     */
    public set title(value: string) {
        this._title = value;
    }

    /**
     * Setter repositoryName
     * @param {string} value
     */
    public set repositoryName(value: string) {
        this._repositoryName = value;
    }

    /**
     * Setter author
     * @param {Developer} value
     */
    public set author(value: Developer) {
        this._author = value;
    }

    /**
     * Setter fromBranch
     * @param {string} value
     */
    public set fromBranch(value: string) {
        this._fromBranch = value;
    }

    /**
     * Setter toBranch
     * @param {string} value
     */
    public set toBranch(value: string) {
        this._toBranch = value;
    }

    /**
     * Setter reviewers
     * @param {Array<Developer>} value
     */
    public set reviewers(value: Array<Developer>) {
        this._reviewers = value;
    }

    /**
     * Setter reviewComments
     * @param {Array<ReviewComment>} value
     */
    public set reviewComments(value: Array<ReviewComment>) {
        this._reviewComments = value;
    }

    /**
     * Setter status
     * @param {string} value
     */
    public set status(value: string) {
        this._status = value;
    }

    /**
     * Setter approvals
     * @param {Array<Developer>} value
     */
    public set approvals(value: Array<Developer>) {
        this._approvals = value;
    }

    /**
     * Setter rejects
     * @param {Array<Developer>} value
     */
    public set rejects(value: Array<Developer>) {
        this._rejects = value;
    }

    /**
     * Setter mergedBy
     * @param {Developer} value
     */
    public set mergedBy(value: Developer) {
        this._mergedBy = value;
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
