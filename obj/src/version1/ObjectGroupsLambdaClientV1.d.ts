import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { CommandableLambdaClient } from 'pip-services3-aws-node';
import { ObjectGroupV1 } from './ObjectGroupV1';
import { IObjectGroupsClientV1 } from './IObjectGroupsClientV1';
export declare class ObjectGroupsLambdaClientV1 extends CommandableLambdaClient implements IObjectGroupsClientV1 {
    constructor(config?: any);
    getGroups(correlationId: string, filter: FilterParams, paging: PagingParams, callback: (err: any, page: DataPage<ObjectGroupV1>) => void): void;
    getGroupById(correlationId: string, groupId: string, callback: (err: any, group: ObjectGroupV1) => void): void;
    createGroup(correlationId: string, group: ObjectGroupV1, callback: (err: any, group: ObjectGroupV1) => void): void;
    updateGroup(correlationId: string, group: ObjectGroupV1, callback: (err: any, group: ObjectGroupV1) => void): void;
    deleteGroupById(correlationId: string, groupId: string, callback: (err: any, group: ObjectGroupV1) => void): void;
    addObject(correlationId: string, groupId: string, objectId: string, callback: (err: any, group: ObjectGroupV1) => void): void;
    removeObject(correlationId: string, groupId: string, objectId: string, callback: (err: any, group: ObjectGroupV1) => void): void;
}
