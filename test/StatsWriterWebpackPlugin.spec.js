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

    const clean = stats => {
        // NOTE (mdreizin): `time` does't exist in `emit` phase
        delete stats.time;

        // NOTE (mdreizin): `stats.json` is emitted, but `stats.json` is saved without it
        stats.assets = [];

        return stats;
    };

    const compile = (filename = 'stats.json', options = {}, callback) => {
        const compiler = webpack(Object.assign({}, options, {
            plugins: [
                new StatsWriterWebpackPlugin(filename)
            ]
        }));

        const done = (err, stats) => {
            const expected = stats.toJson();

            readJson(join(options.output.path, filename), (err, actual) => {
                expect(err).toEqual(null);
                expect(clean(expected)).toEqual(clean(actual));

                callback();
            });
        };

        if (options.watchOptions) {
            compiler.watch(options.watchOptions, done);
        } else {
            compiler.run(done);
        }
    };

    beforeEach(() => spyOn(console, 'log'));

    afterEach(done => remove(TMP_DIR, done));

    describe('#apply()', function() {
        let options;

        beforeEach(() => {
            options = {
                debug: true,
                profile: false,
                output: {
                    path: TMP_DIR
                }
            }
        });

        describe('#run()', () => {
            it('should save `stats.json` successfully', done => compile(undefined, options, done));

            it('should save `stats1.json` successfully', done => compile('stats1.json', options, done));

            it('should add missing `timings`', done => {
                options = Object.assign(options, {
                    profile: true
                });

                compile('stats1.json', options, done)
            });
        });

        describe('#watch()', () => {
            beforeEach(() => {
                options = Object.assign(options, {
                    watchOptions: {}
                })
            });

            it('should save `stats.json` successfully', done => compile(undefined, options, done));
        });
    });
});
