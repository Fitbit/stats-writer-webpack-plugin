import {
    resolve as resolvePath
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
 * @private
 * @type {WeakMap}
 */
const FILENAME = new WeakMap();

/**
 * @class
 */
class StatsWriterWebpackPlugin {
    /**
     * @constructor
     * @param {String} [filename='stats.json']
     */
    constructor(filename = DEFAULT_FILENAME) {
        FILENAME.set(this, filename);
    }

    /**
     * @readonly
     * @type {String}
     */
    get filename() {
        return FILENAME.get(this);
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
            const statsOptions = compilation.options.stats || {},
                profile = statsOptions.profile === true,
                debug = compilation.options.devtool !== false;

            endTime = new Date().getTime();

            if (debug) {
                spaces = '\t';
            }

            const stats = compilation.getStats().toJson(statsOptions);

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
                    filename = resolvePath(asset.existsAt);

                readJson(filename, { 'throws': false }, (err, stats) => {
                    stats.time = endTime - startTime;

                    writeJson(filename, stats, { spaces }, callback);
                });
            } else {
                callback();
            }
        });
    }
}

export default StatsWriterWebpackPlugin;
