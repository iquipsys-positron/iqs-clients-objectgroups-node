import { Descriptor } from 'pip-services3-commons-node';
import { Factory } from 'pip-services3-components-node';

import { ObjectGroupsNullClientV1 } from '../version1/ObjectGroupsNullClientV1';
import { ObjectGroupsDirectClientV1 } from '../version1/ObjectGroupsDirectClientV1';
import { ObjectGroupsHttpClientV1 } from '../version1/ObjectGroupsHttpClientV1';
import { ObjectGroupsLambdaClientV1 } from '../version1/ObjectGroupsLambdaClientV1';

export class ObjectGroupsClientFactory extends Factory {
	public static Descriptor: Descriptor = new Descriptor('iqs-services-objectgroups', 'factory', 'default', 'default', '1.0');
	public static NullClientV1Descriptor = new Descriptor('iqs-services-objectgroups', 'client', 'null', 'default', '1.0');
	public static DirectClientV1Descriptor = new Descriptor('iqs-services-objectgroups', 'client', 'direct', 'default', '1.0');
	public static HttpClientV1Descriptor = new Descriptor('iqs-services-objectgroups', 'client', 'http', 'default', '1.0');
	public static LambdaClientV1Descriptor = new Descriptor('iqs-services-objectgroups', 'client', 'lambda', 'default', '1.0');
	
	constructor() {
		super();

		this.registerAsType(ObjectGroupsClientFactory.NullClientV1Descriptor, ObjectGroupsNullClientV1);
		this.registerAsType(ObjectGroupsClientFactory.DirectClientV1Descriptor, ObjectGroupsDirectClientV1);
		this.registerAsType(ObjectGroupsClientFactory.HttpClientV1Descriptor, ObjectGroupsHttpClientV1);
		this.registerAsType(ObjectGroupsClientFactory.LambdaClientV1Descriptor, ObjectGroupsLambdaClientV1);
	}
	
}
