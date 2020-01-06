import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { DirectClient } from 'pip-services3-rpc-node';
import { IObjectGroupsClientV1 } from './IObjectGroupsClientV1';
import { ObjectGroupV1 } from './ObjectGroupV1';
export declare class ObjectGroupsDirectClientV1 extends DirectClient<any> implements IObjectGroupsClientV1 {
    constructor();
    getGroups(correlationId: string, filter: FilterParams, paging: PagingParams, callback: (err: any, page: DataPage<ObjectGroupV1>) => void): void;
    getGroupById(correlationId: string, groupId: string, callback: (err: any, group: ObjectGroupV1) => void): void;
    createGroup(correlationId: string, group: ObjectGroupV1, callback: (err: any, group: ObjectGroupV1) => void): void;
    updateGroup(correlationId: string, group: ObjectGroupV1, callback: (err: any, group: ObjectGroupV1) => void): void;
    deleteGroupById(correlationId: string, groupId: string, callback: (err: any, group: ObjectGroupV1) => void): void;
    addObject(correlationId: string, groupId: string, objectId: string, callback: (err: any, group: ObjectGroupV1) => void): void;
    removeObject(correlationId: string, groupId: string, objectId: string, callback: (err: any, group: ObjectGroupV1) => void): void;
}
