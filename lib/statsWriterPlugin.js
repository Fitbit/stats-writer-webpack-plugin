'use strict';

/**
 * @private
 * @constant
 * @type {String}
 */
var DEFAULT_FILENAME = 'stats.json';

/**
 * @class
 * @alias StatsWriterPlugin
 * @param {String} [filename='stats.json']
 */
function StatsWriterPlugin(filename) {
    if (!filename) {
        filename = DEFAULT_FILENAME;
    }

    this.filename = filename;
}

/**
 * @param {Compiler} compiler
 */
StatsWriterPlugin.prototype.apply = function(compiler) {
    var filename = this.filename;

    compiler.plugin('emit', function (compilation, callback) {
        var stats = compilation.getStats().toJson(),
            buffer = new Buffer(JSON.stringify(stats));

        compilation.assets[filename] = {
            source: function() {
                return buffer;
            },

            size: function () {
                return buffer.length;
            }
        };

        callback();
    });
};

/**
 * @module webpack-stats-writer-plugin/lib/statsWriterPlugin
 * @returns {StatsWriterPlugin}
 */
module.exports = StatsWriterPlugin;
