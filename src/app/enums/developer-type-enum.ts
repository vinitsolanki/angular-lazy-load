import { IBaseEnum } from './base-enum';

export interface IDeveloperType extends IBaseEnum<DeveloperTypeEnum> {
}

export enum DeveloperTypeEnum {
    ONSHORDEV, OFFSHORDEV
}

export const DeveloperTypes: Array<IDeveloperType> = [
    {
        key: DeveloperTypeEnum.ONSHORDEV,
        display: 'Onshore Developer',
    },
    {
        key: DeveloperTypeEnum.OFFSHORDEV,
        display: 'Offshore Developer',
    }
];

export namespace DeveloperTypeEnum {
    export function get(developerType: DeveloperTypeEnum): IDeveloperType {
        if (!developerType) {
            return null;
        }

        return DeveloperTypes.find(x => x.key === developerType);
    }
}
