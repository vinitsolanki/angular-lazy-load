export class RestRequest {
    public id: string;
    public timestamp: string;

    constructor(id: string, timestamp: string) {
        this.id = id;
        this.timestamp = timestamp;
    }
}
