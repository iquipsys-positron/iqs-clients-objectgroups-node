"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
class ObjectGroupsHttpClientV1 extends pip_services3_rpc_node_1.CommandableHttpClient {
    constructor(config) {
        super('v1/object_groups');
        if (config != null)
            this.configure(pip_services3_commons_node_1.ConfigParams.fromValue(config));
    }
    getGroups(correlationId, filter, paging, callback) {
        this.callCommand('get_groups', correlationId, {
            filter: filter,
            paging: paging
        }, callback);
    }
    getGroupById(correlationId, groupId, callback) {
        this.callCommand('get_group_by_id', correlationId, {
            group_id: groupId
        }, callback);
    }
    createGroup(correlationId, group, callback) {
        this.callCommand('create_group', correlationId, {
            group: group
        }, callback);
    }
    updateGroup(correlationId, group, callback) {
        this.callCommand('update_group', correlationId, {
            group: group
        }, callback);
    }
    deleteGroupById(correlationId, groupId, callback) {
        this.callCommand('delete_group_by_id', correlationId, {
            group_id: groupId
        }, callback);
    }
    addObject(correlationId, groupId, objectId, callback) {
        this.callCommand('add_object', correlationId, {
            group_id: groupId,
            object_id: objectId
        }, callback);
    }
    removeObject(correlationId, groupId, objectId, callback) {
        this.callCommand('remove_object', correlationId, {
            group_id: groupId,
            object_id: objectId
        }, callback);
    }
}
exports.ObjectGroupsHttpClientV1 = ObjectGroupsHttpClientV1;
//# sourceMappingURL=ObjectGroupsHttpClientV1.js.map