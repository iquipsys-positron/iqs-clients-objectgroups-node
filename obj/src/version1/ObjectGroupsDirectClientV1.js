"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
class ObjectGroupsDirectClientV1 extends pip_services3_rpc_node_1.DirectClient {
    constructor() {
        super();
        this._dependencyResolver.put('controller', new pip_services3_commons_node_1.Descriptor("iqs-services-objectgroups", "controller", "*", "*", "*"));
    }
    getGroups(correlationId, filter, paging, callback) {
        let timing = this.instrument(correlationId, 'object_groups.get_groups');
        this._controller.getGroups(correlationId, filter, paging, (err, page) => {
            timing.endTiming();
            callback(err, page);
        });
    }
    getGroupById(correlationId, groupId, callback) {
        let timing = this.instrument(correlationId, 'object_groups.get_group_by_id');
        this._controller.getGroupById(correlationId, groupId, (err, group) => {
            timing.endTiming();
            callback(err, group);
        });
    }
    createGroup(correlationId, group, callback) {
        let timing = this.instrument(correlationId, 'object_groups.create_group');
        this._controller.createGroup(correlationId, group, (err, group) => {
            timing.endTiming();
            callback(err, group);
        });
    }
    updateGroup(correlationId, group, callback) {
        let timing = this.instrument(correlationId, 'object_groups.update_group');
        this._controller.updateGroup(correlationId, group, (err, group) => {
            timing.endTiming();
            callback(err, group);
        });
    }
    deleteGroupById(correlationId, groupId, callback) {
        let timing = this.instrument(correlationId, 'object_groups.delete_group_by_id');
        this._controller.deleteGroupById(correlationId, groupId, (err, group) => {
            timing.endTiming();
            callback(err, group);
        });
    }
    addObject(correlationId, groupId, objectId, callback) {
        let timing = this.instrument(correlationId, 'object_groups.add_object');
        this._controller.addObject(correlationId, groupId, objectId, (err, group) => {
            timing.endTiming();
            callback(err, group);
        });
    }
    removeObject(correlationId, groupId, objectId, callback) {
        let timing = this.instrument(correlationId, 'object_groups.remove_object');
        this._controller.removeObject(correlationId, groupId, objectId, (err, group) => {
            timing.endTiming();
            callback(err, group);
        });
    }
}
exports.ObjectGroupsDirectClientV1 = ObjectGroupsDirectClientV1;
//# sourceMappingURL=ObjectGroupsDirectClientV1.js.map