let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { ObjectGroupsMemoryPersistence } from 'iqs-services-objectgroups-node';
import { ObjectGroupsController } from 'iqs-services-objectgroups-node';
import { ObjectGroupsHttpServiceV1 } from 'iqs-services-objectgroups-node';
import { IObjectGroupsClientV1 } from '../../src/version1/IObjectGroupsClientV1';
import { ObjectGroupsHttpClientV1 } from '../../src/version1/ObjectGroupsHttpClientV1';
import { ObjectGroupsClientFixtureV1 } from './ObjectGroupsClientFixtureV1';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

suite('ObjectGroupsRestClientV1', ()=> {
    let service: ObjectGroupsHttpServiceV1;
    let client: ObjectGroupsHttpClientV1;
    let fixture: ObjectGroupsClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new ObjectGroupsMemoryPersistence();
        let controller = new ObjectGroupsController();

        service = new ObjectGroupsHttpServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('iqs-services-objectgroups', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('iqs-services-objectgroups', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('iqs-services-objectgroups', 'service', 'http', 'default', '1.0'), service
        );
        controller.setReferences(references);
        service.setReferences(references);

        client = new ObjectGroupsHttpClientV1();
        client.setReferences(references);
        client.configure(httpConfig);

        fixture = new ObjectGroupsClientFixtureV1(client);

        service.open(null, (err) => {
            client.open(null, done);
        });
    });
    
    suiteTeardown((done) => {
        client.close(null);
        service.close(null, done);
    });

    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});
