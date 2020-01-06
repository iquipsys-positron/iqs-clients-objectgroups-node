import { IReferences } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams} from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { DirectClient } from 'pip-services3-rpc-node';

import { IObjectGroupsClientV1 } from './IObjectGroupsClientV1';
//import { IObjectGroupsController } from 'iqs-services-objectgroups-node';
import { ObjectGroupV1 } from './ObjectGroupV1';

export class ObjectGroupsDirectClientV1 extends DirectClient<any> implements IObjectGroupsClientV1 {
            
    public constructor() {
        super();
        this._dependencyResolver.put('controller', new Descriptor("iqs-services-objectgroups", "controller", "*", "*", "*"))
    }

    public getGroups(correlationId: string, filter: FilterParams, paging: PagingParams, 
        callback: (err: any, page: DataPage<ObjectGroupV1>) => void): void {
        let timing = this.instrument(correlationId, 'object_groups.get_groups');
        this._controller.getGroups(correlationId, filter, paging, (err, page) => {
            timing.endTiming();
            callback(err, page);
        });
    }

    public getGroupById(correlationId: string, groupId: string, 
        callback: (err: any, group: ObjectGroupV1) => void): void {
        let timing = this.instrument(correlationId, 'object_groups.get_group_by_id');
        this._controller.getGroupById(correlationId, groupId, (err, group) => {
            timing.endTiming();
            callback(err, group);
        });
    }

    public createGroup(correlationId: string, group: ObjectGroupV1, 
        callback: (err: any, group: ObjectGroupV1) => void): void {
        let timing = this.instrument(correlationId, 'object_groups.create_group');
        this._controller.createGroup(correlationId, group, (err, group) => {
            timing.endTiming();
            callback(err, group);
        });
    }

    public updateGroup(correlationId: string, group: ObjectGroupV1, 
        callback: (err: any, group: ObjectGroupV1) => void): void {
        let timing = this.instrument(correlationId, 'object_groups.update_group');
        this._controller.updateGroup(correlationId, group, (err, group) => {
            timing.endTiming();
            callback(err, group);
        });
    }

    public deleteGroupById(correlationId: string, groupId: string,
        callback: (err: any, group: ObjectGroupV1) => void): void {
        let timing = this.instrument(correlationId, 'object_groups.delete_group_by_id');
        this._controller.deleteGroupById(correlationId, groupId, (err, group) => {
            timing.endTiming();
            callback(err, group);
        });
    }

    public addObject(correlationId: string, groupId: string, objectId: string,
        callback: (err: any, group: ObjectGroupV1) => void): void {
        let timing = this.instrument(correlationId, 'object_groups.add_object');
        this._controller.addObject(correlationId, groupId, objectId, (err, group) => {
            timing.endTiming();
            callback(err, group);
        });
    }

    public removeObject(correlationId: string, groupId: string, objectId: string,
        callback: (err: any, group: ObjectGroupV1) => void): void {
        let timing = this.instrument(correlationId, 'object_groups.remove_object');
        this._controller.removeObject(correlationId, groupId, objectId, (err, group) => {
            timing.endTiming();
            callback(err, group);
        });
    }

}