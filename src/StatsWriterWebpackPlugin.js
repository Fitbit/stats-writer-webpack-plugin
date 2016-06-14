import {
    resolve
} from 'path';
import {
    readJson,
    writeJson
} from 'fs-extra';
import RawSource from 'webpack-core/lib/RawSource';

/**
 * @private
 * @type {String}
 */
const DEFAULT_FILENAME = 'stats.json';

/**
 * @class
 */
class StatsWriterWebpackPlugin {
    /**
     * @constructor
     * @param {String} [filename='stats.json']
     */
    constructor(filename = DEFAULT_FILENAME) {
        this.filename = filename;
    }

    /**
     * @param {Compiler} compiler
     * @returns {void}
     */
    apply(compiler) {
        let startTime,
            endTime,
            spaces = 0,
            timings = false;

        compiler.plugin('run', (_, callback) => {
            startTime = new Date().getTime();

            callback();
        });

        compiler.plugin('watch-run', (_, callback) => {
            startTime = new Date().getTime();

            callback();
        });

        compiler.plugin('after-compile', (compilation, callback) => {
            endTime = new Date().getTime();

            callback();
        });

        compiler.plugin('emit', (compilation, callback) => {
            const profile = compilation.options.profile === true,
                debug = compilation.options.debug === true;

            endTime = new Date().getTime();

            if (debug) {
                spaces = '\t';
            }

            const stats = compilation.getStats().toJson({
                timings: profile
            });

            if (!stats.time && profile) {
                timings = true;
            }

            compilation.assets[this.filename] = new RawSource(JSON.stringify(stats, null, spaces));

            callback();
        });

        compiler.plugin('after-emit', (compilation, callback) => {
            endTime = new Date().getTime();

            if (timings) {
                const asset = compilation.assets[this.filename],
                    existsAt = resolve(asset.existsAt);

                readJson(existsAt, { 'throws': false }, (err, stats) => {
                    stats.time = endTime - startTime;

                    writeJson(existsAt, stats, { spaces }, callback);
                });
            } else {
                callback();
            }
        });
    }
}

export default StatsWriterWebpackPlugin;
