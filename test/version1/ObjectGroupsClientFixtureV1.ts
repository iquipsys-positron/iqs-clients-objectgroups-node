let _ = require('lodash');
let async = require('async');
let assert = require('chai').assert;

import { PagingParams } from 'pip-services3-commons-node';

import { ObjectGroupV1 } from '../../src/version1/ObjectGroupV1';
import { IObjectGroupsClientV1 } from '../../src/version1/IObjectGroupsClientV1';

let GROUP1: ObjectGroupV1 = {
    id: '1',
    org_id: '1',
    name: 'Group 1',
    object_ids: ['1', '2'],
};
let GROUP2: ObjectGroupV1 = {
    id: '2',
    org_id: '1',
    name: 'Group 2',
    object_ids: ['2', '3'],
};

export class ObjectGroupsClientFixtureV1 {
    private _client: IObjectGroupsClientV1;
    
    constructor(client: IObjectGroupsClientV1) {
        this._client = client;
    }
        
    public testCrudOperations(done) {
        let group1, group2;

        async.series([
        // Create one group
            (callback) => {
                this._client.createGroup(
                    null,
                    GROUP1,
                    (err, group) => {
                        assert.isNull(err);

                        assert.isObject(group);
                        assert.equal(group.name, GROUP1.name);
                        assert.equal(group.org_id, GROUP1.org_id);
                        assert.sameMembers(group.object_ids, GROUP1.object_ids);

                        group1 = group;

                        callback();
                    }
                );
            },
        // Create another group
            (callback) => {
                this._client.createGroup(
                    null,
                    GROUP2,
                    (err, group) => {
                        assert.isNull(err);

                        assert.isObject(group);
                        assert.equal(group.name, GROUP2.name);
                        assert.equal(group.org_id, GROUP2.org_id);
                        assert.sameMembers(group.object_ids, GROUP2.object_ids);

                        group2 = group;

                        callback();
                    }
                );
            },
        // Get all groups
            (callback) => {
                this._client.getGroups(
                    null,
                    null,
                    new PagingParams(0,5,false),
                    (err, groups) => {
                        assert.isNull(err);

                        assert.isObject(groups);
                        assert.isTrue(groups.data.length >= 2);

                        callback();
                    }
                );
            },
        // Update the group
            (callback) => {
                group1.name = 'Updated group 1';

                this._client.updateGroup(
                    null,
                    group1,
                    (err, group) => {
                        assert.isNull(err);

                        assert.isObject(group);
                        assert.equal(group.name, 'Updated group 1');
                        assert.equal(group.id, group1.id);

                        group1 = group;

                        callback();
                    }
                );
            },
        // Remove object
            (callback) => {
                this._client.removeObject(
                    null, group1.id, '2',
                    (err, group) => {
                        assert.isNull(err);

                        assert.isObject(group);
                        assert.sameMembers(group.object_ids, ['1']);

                        group1 = group;

                        callback();
                    }
                );
            },
        // Add object
            (callback) => {
                this._client.addObject(
                    null, group1.id, '5',
                    (err, group) => {
                        assert.isNull(err);

                        assert.isObject(group);
                        assert.sameMembers(group.object_ids, ['1', '5']);

                        group1 = group;

                        callback();
                    }
                );
            },
        // Delete group
            (callback) => {
                this._client.deleteGroupById(
                    null,
                    group1.id,
                    (err) => {
                        assert.isNull(err);

                        callback();
                    }
                );
            },
        // Try to get delete group
            (callback) => {
                this._client.getGroupById(
                    null,
                    group1.id,
                    (err, group) => {
                        assert.isNull(err);
                        
                        assert.isNotNull(group);
                        assert.isTrue(group.deleted);

                        callback();
                    }
                );
            }
        ], done);
    }
}
