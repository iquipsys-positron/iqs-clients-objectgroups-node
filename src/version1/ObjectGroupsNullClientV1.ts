import { IReferences } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams} from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { DirectClient } from 'pip-services3-rpc-node';

import { IObjectGroupsClientV1 } from './IObjectGroupsClientV1';
import { ObjectGroupV1 } from './ObjectGroupV1';

export class ObjectGroupsNullClientV1 implements IObjectGroupsClientV1 {
            
    public getGroups(correlationId: string, filter: FilterParams, paging: PagingParams, 
        callback: (err: any, page: DataPage<ObjectGroupV1>) => void): void {
        callback(null, new DataPage<ObjectGroupV1>([], 0));
    }

    public getGroupById(correlationId: string, groupId: string, 
        callback: (err: any, group: ObjectGroupV1) => void): void {
        callback(null, null);
    }

    public createGroup(correlationId: string, group: ObjectGroupV1, 
        callback: (err: any, group: ObjectGroupV1) => void): void {
        callback(null, group);
    }

    public updateGroup(correlationId: string, group: ObjectGroupV1, 
        callback: (err: any, group: ObjectGroupV1) => void): void {
        callback(null, group);
    }

    public deleteGroupById(correlationId: string, groupId: string,
        callback: (err: any, group: ObjectGroupV1) => void): void {
        callback(null, null);
    }

    public addObject(correlationId: string, groupId: string, objectId: string,
        callback: (err: any, group: ObjectGroupV1) => void): void {
        callback(null, null);
    }

    public removeObject(correlationId: string, groupId: string, objectId: string,
        callback: (err: any, group: ObjectGroupV1) => void): void {
        callback(null, null);
    }

}