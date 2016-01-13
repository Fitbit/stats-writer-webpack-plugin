'use strict';

var StatsWriterPlugin = require('./lib/statsWriterPlugin');

/**
 * @external Compiler
 * @typedef {Object} Compiler
 * @see {@link https://github.com/webpack/webpack/blob/master/lib/Compiler.js}
 */

/**
 * @module webpack-stats-writer-plugin/index
 * @returns {StatsWriterPlugin}
 */
module.exports = StatsWriterPlugin;
