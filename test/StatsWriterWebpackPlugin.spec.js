import {
    join
} from 'path';
import {
    readJson,
    remove
} from 'fs-extra';
import webpack from 'webpack';
import StatsWriterWebpackPlugin from '../src/index';

describe('StatsWriterWebpackPlugin', () => {
    const TMP_DIR = './test/tmp';

    const clean = (stats) => {
        // NOTE (mdreizin): `time` does't exist in `emit` phase
        delete stats.time;

        // NOTE (mdreizin): `stats.json` is emitted, but `stats.json` is saved without it
        stats.assets = [];

        return stats;
    };

    const compile = (dirname, filename = 'stats.json', done) => {
        webpack({
            debug: true,
            profile: true,
            timings: true,
            output: {
                path: dirname
            },
            plugins: [
                new StatsWriterWebpackPlugin(filename)
            ]
        }, (err, stats) => {
            const expected = stats.toJson();

            readJson(join(dirname, filename), (_, actual) => {
                expect(clean(expected)).toEqual(clean(actual));

                done();
            });
        });
    };

    beforeEach(() => spyOn(console, 'log'));

    afterEach(done => remove(TMP_DIR, done));

    describe('#apply()', function() {
        it('should save `stats.json` successfully', done => compile(TMP_DIR, undefined, done));

        it('should save `stats1.json` successfully', done => compile(TMP_DIR, 'stats1.json', done));
    });
});
