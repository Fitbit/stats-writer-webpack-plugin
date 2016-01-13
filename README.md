[![NPM version](http://img.shields.io/npm/v/webpack-stats-writer-plugin.svg?style=flat)](https://www.npmjs.org/package/webpack-stats-writer-plugin) [![Travis build status](http://img.shields.io/travis/mdreizin/webpack-stats-writer-plugin/master.svg?style=flat)](https://travis-ci.org/mdreizin/webpack-stats-writer-plugin) [![AppVeyor build status](https://ci.appveyor.com/api/projects/status/github/mdreizin/webpack-stats-writer-plugin?svg=true&branch=master)](https://ci.appveyor.com/project/mdreizin/webpack-stats-writer-plugin) [![Code Climate](https://codeclimate.com/github/mdreizin/webpack-stats-writer-plugin/badges/gpa.svg)](https://codeclimate.com/github/mdreizin/webpack-stats-writer-plugin) [![Code Climate](https://codeclimate.com/github/mdreizin/webpack-stats-writer-plugin/badges/coverage.svg)](https://codeclimate.com/github/mdreizin/webpack-stats-writer-plugin) [![Dependency Status](https://david-dm.org/mdreizin/webpack-stats-writer-plugin.svg?style=flat)](https://david-dm.org/mdreizin/webpack-stats-writer-plugin) [![Dependency Status](https://david-dm.org/mdreizin/webpack-stats-writer-plugin/dev-status.svg?style=flat)](https://david-dm.org/mdreizin/webpack-stats-writer-plugin#info=devDependencies)

[webpack](https://github.com/webpack/webpack)-[stats](http://webpack.github.io/docs/node.js-api.html#stats)-writer-plugin
=========================================================================================================================

Just saves `stats` object as is

<h2 id="usage">Usage</h2>

```javascript
'use strict';

var StatsWriterPlugin = require('webpack-stats-writer-plugin');

module.exports = {
    plugins: [
        new StatsWriterPlugin()
    ]
};

