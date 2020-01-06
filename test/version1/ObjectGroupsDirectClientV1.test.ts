let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { ObjectGroupsMemoryPersistence } from 'iqs-services-objectgroups-node';
import { ObjectGroupsController } from 'iqs-services-objectgroups-node';
import { IObjectGroupsClientV1 } from '../../src/version1/IObjectGroupsClientV1';
import { ObjectGroupsDirectClientV1 } from '../../src/version1/ObjectGroupsDirectClientV1';
import { ObjectGroupsClientFixtureV1 } from './ObjectGroupsClientFixtureV1';

suite('ObjectGroupsDirectClientV1', ()=> {
    let client: ObjectGroupsDirectClientV1;
    let fixture: ObjectGroupsClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new ObjectGroupsMemoryPersistence();
        let controller = new ObjectGroupsController();

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('iqs-services-objectgroups', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('iqs-services-objectgroups', 'controller', 'default', 'default', '1.0'), controller,
        );
        controller.setReferences(references);

        client = new ObjectGroupsDirectClientV1();
        client.setReferences(references);

        fixture = new ObjectGroupsClientFixtureV1(client);

        client.open(null, done);
    });
    
    suiteTeardown((done) => {
        client.close(null, done);
    });

    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});
