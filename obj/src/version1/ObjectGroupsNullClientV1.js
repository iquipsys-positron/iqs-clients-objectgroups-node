"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
class ObjectGroupsNullClientV1 {
    getGroups(correlationId, filter, paging, callback) {
        callback(null, new pip_services3_commons_node_1.DataPage([], 0));
    }
    getGroupById(correlationId, groupId, callback) {
        callback(null, null);
    }
    createGroup(correlationId, group, callback) {
        callback(null, group);
    }
    updateGroup(correlationId, group, callback) {
        callback(null, group);
    }
    deleteGroupById(correlationId, groupId, callback) {
        callback(null, null);
    }
    addObject(correlationId, groupId, objectId, callback) {
        callback(null, null);
    }
    removeObject(correlationId, groupId, objectId, callback) {
        callback(null, null);
    }
}
exports.ObjectGroupsNullClientV1 = ObjectGroupsNullClientV1;
//# sourceMappingURL=ObjectGroupsNullClientV1.js.map