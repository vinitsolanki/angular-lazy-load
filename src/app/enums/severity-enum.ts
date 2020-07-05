import { IBaseEnum } from './base-enum';

export interface ISeverity extends IBaseEnum<SeverityEnum> {
}

export enum SeverityEnum {
    LOW, MEDIUM, HIGH
}

export const Severitys: Array<ISeverity> = [
    {
        key: SeverityEnum.LOW,
        display: 'Low',
    },
    {
        key: SeverityEnum.MEDIUM,
        display: 'Medium',
    },
    {
        key: SeverityEnum.HIGH,
        display: 'High',
    }
];