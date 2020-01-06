let _ = require('lodash');

import { ConfigParams } from 'pip-services3-commons-node';
import { IReferences } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { CommandableLambdaClient } from 'pip-services3-aws-node';

import { ObjectGroupV1 } from './ObjectGroupV1';
import { IObjectGroupsClientV1 } from './IObjectGroupsClientV1';

export class ObjectGroupsLambdaClientV1 extends CommandableLambdaClient implements IObjectGroupsClientV1 {       

    constructor(config?: any) {
        super('object_groups');

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }
                
    public getGroups(correlationId: string, filter: FilterParams, paging: PagingParams,
        callback: (err: any, page: DataPage<ObjectGroupV1>) => void): void {
        this.callCommand( 
            'get_groups', 
            correlationId,
            {
                filter: filter,
                paging: paging
            }, 
            callback
        );
    }

    public getGroupById(correlationId: string, groupId: string,
        callback: (err: any, group: ObjectGroupV1) => void): void {
        this.callCommand( 
            'get_group_by_id',
            correlationId,
            {
                group_id: groupId
            }, 
            callback
        );        
    }

    public createGroup(correlationId: string, group: ObjectGroupV1,
        callback: (err: any, group: ObjectGroupV1) => void): void {
        this.callCommand(
            'create_group',
            correlationId,
            {
                group: group
            }, 
            callback
        );
    }

    public updateGroup(correlationId: string, group: ObjectGroupV1,
        callback: (err: any, group: ObjectGroupV1) => void): void {
        this.callCommand(
            'update_group', 
            correlationId,
            {
                group: group
            }, 
            callback
        );
    }

    public deleteGroupById(correlationId: string, groupId: string,
        callback: (err: any, group: ObjectGroupV1) => void): void {
        this.callCommand(
            'delete_group_by_id', 
            correlationId,
            {
                group_id: groupId
            }, 
            callback
        );
    }

    public addObject(correlationId: string, groupId: string, objectId: string,
        callback: (err: any, group: ObjectGroupV1) => void): void {
        this.callCommand(
            'add_object', 
            correlationId,
            {
                group_id: groupId,
                object_id: objectId
            }, 
            callback
        );
    }

    public removeObject(correlationId: string, groupId: string, objectId: string,
        callback: (err: any, group: ObjectGroupV1) => void): void {
        this.callCommand(
            'remove_object', 
            correlationId,
            {
                group_id: groupId,
                object_id: objectId
            }, 
            callback
        );
    }
    
}
