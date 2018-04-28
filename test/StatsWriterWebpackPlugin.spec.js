import {
    readJson,
    remove
} from 'fs-extra';
import webpack from 'webpack';
import WEBPACK_CONFIG from './fixtures/webpack.config';
import StatsWriterWebpackPlugin from '../src/index';

describe('StatsWriterWebpackPlugin', () => {
    const TMP_DIR = './test/fixtures/tmp',
        STATS_FILENAME = 'stats.json';

    function buildConfig(filename, options = {}) {
        const config = Object.assign({}, WEBPACK_CONFIG, options);

        config.plugins.push(new StatsWriterWebpackPlugin(filename));

        return config;
    }

    function compileConfig(options = {}, callback) {
        const compiler = webpack(options);

        if (options.watchOptions) {
            compiler.watch(options.watchOptions, callback);
        } else {
            compiler.run(callback);
        }
    }

    function compileAndCheck(filename, options = {}, callback) {
        const config = buildConfig(filename, options);

        compileConfig(config, (err, stats) => {
            expect(err).toEqual(null);

            readJson(stats.compilation.assets[filename].existsAt, (innerErr, json) => {
                expect(innerErr).toEqual(null);

                callback(json);
            });
        });
    }

    beforeEach(() => spyOn(console, 'log'));

    afterEach(done => remove(TMP_DIR, done));

    describe('#apply()', () => {
        describe('#run()', () => {
            it('should save stats successfully', done => compileAndCheck(STATS_FILENAME, {
                devtool: 'source-map'
            }, done));

            it('should add missing timings', done => {
                compileAndCheck(STATS_FILENAME, {
                    devtool: 'source-map'
                }, stats => {
                    expect(stats.time).not.toBeUndefined();

                    done();
                });
            });
        });

        describe('#watch()', () => {
            it('should save stats successfully', done => compileAndCheck(STATS_FILENAME, {
                devtool: 'source-map',
                watchOptions: {}
            }, done));
        });
    });
});
