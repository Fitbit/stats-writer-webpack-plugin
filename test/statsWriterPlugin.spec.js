'use strict';

var path = require('path'),
    fs = require('fs-extra'),
    webpack = require('webpack'),
    StatsWriterPlugin = require('../');

var TMP_DIR = './test/fixtures/tmp';

describe('StatsWriterPlugin', function () {
    function compile(dirname, filename, done) {
        webpack({
            output: {
                path: dirname
            },
            plugins: [
                new StatsWriterPlugin(filename)
            ]
        }, function(err, stats) {
            filename = filename || 'stats.json';

            var expected = stats.toJson();

            // NOTE (mdreizin): `time` does't exist in `emit` phase
            delete expected.time;

            // NOTE (mdreizin): `stats.json` is emitted, but `stats.json` is saved without it
            expected.assets = [];

            fs.readJson(path.join(dirname, filename), function(_, actual) {
                expect(expected).toEqual(actual);

                done();
            });
        });
    }

    beforeEach(function() {
        spyOn(console, 'log');
    });

    afterEach(function(done) {
        fs.remove(TMP_DIR, done);
    });

    describe('#apply()', function() {
        it('should save `stats.json` successfully', function(done) {
            compile(TMP_DIR, null, done);
        });

        it('should save `stats1.json` successfully', function(done) {
            compile(TMP_DIR, 'stats1.json', done);
        });
    });
});
