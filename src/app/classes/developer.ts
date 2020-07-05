import { DeveloperTypeEnum } from '../enums/developer-type-enum';

export class Developer {
    private _username: string;
    private _type: DeveloperTypeEnum;

    /**
     * Getter username
     * @return {string}
     */
    public get username(): string {
        return this._username;
    }

    /**
     * Getter type
     * @return {DeveloperTypeEnum}
     */
    public get type(): DeveloperTypeEnum {
        return this._type;
    }

    /**
     * Setter username
     * @param {string} value
     */
    public set username(value: string) {
        this._username = value;
    }

    /**
     * Setter type
     * @param {DeveloperTypeEnum} value
     */
    public set type(value: DeveloperTypeEnum) {
        this._type = value;
    }

}