"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_components_node_1 = require("pip-services3-components-node");
const ObjectGroupsNullClientV1_1 = require("../version1/ObjectGroupsNullClientV1");
const ObjectGroupsDirectClientV1_1 = require("../version1/ObjectGroupsDirectClientV1");
const ObjectGroupsHttpClientV1_1 = require("../version1/ObjectGroupsHttpClientV1");
const ObjectGroupsLambdaClientV1_1 = require("../version1/ObjectGroupsLambdaClientV1");
class ObjectGroupsClientFactory extends pip_services3_components_node_1.Factory {
    constructor() {
        super();
        this.registerAsType(ObjectGroupsClientFactory.NullClientV1Descriptor, ObjectGroupsNullClientV1_1.ObjectGroupsNullClientV1);
        this.registerAsType(ObjectGroupsClientFactory.DirectClientV1Descriptor, ObjectGroupsDirectClientV1_1.ObjectGroupsDirectClientV1);
        this.registerAsType(ObjectGroupsClientFactory.HttpClientV1Descriptor, ObjectGroupsHttpClientV1_1.ObjectGroupsHttpClientV1);
        this.registerAsType(ObjectGroupsClientFactory.LambdaClientV1Descriptor, ObjectGroupsLambdaClientV1_1.ObjectGroupsLambdaClientV1);
    }
}
exports.ObjectGroupsClientFactory = ObjectGroupsClientFactory;
ObjectGroupsClientFactory.Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-objectgroups', 'factory', 'default', 'default', '1.0');
ObjectGroupsClientFactory.NullClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-objectgroups', 'client', 'null', 'default', '1.0');
ObjectGroupsClientFactory.DirectClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-objectgroups', 'client', 'direct', 'default', '1.0');
ObjectGroupsClientFactory.HttpClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-objectgroups', 'client', 'http', 'default', '1.0');
ObjectGroupsClientFactory.LambdaClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-objectgroups', 'client', 'lambda', 'default', '1.0');
//# sourceMappingURL=ObjectGroupsClientFactory.js.map