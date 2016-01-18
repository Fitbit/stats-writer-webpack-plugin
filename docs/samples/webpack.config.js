'use strict';

var StatsWriterPlugin = require('webpack-stats-writer-plugin');

module.exports = {
    plugins: [
        new StatsWriterPlugin()
    ]
};
