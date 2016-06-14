[![NPM version](http://img.shields.io/npm/v/stats-writer-webpack-plugin.svg?style=flat-square)](https://www.npmjs.org/package/stats-writer-webpack-plugin)
[![Travis build status](http://img.shields.io/travis/mdreizin/webpack-stats-writer-plugin/master.svg?style=flat-square)](https://travis-ci.org/mdreizin/webpack-stats-writer-plugin)
[![AppVeyor build status](https://img.shields.io/appveyor/ci/mdreizin/webpack-stats-writer-plugin/master.svg?style=flat-square)](https://ci.appveyor.com/project/mdreizin/webpack-stats-writer-plugin/branch/master)
[![Code Climate GPA](https://img.shields.io/codeclimate/github/mdreizin/webpack-stats-writer-plugin.svg?style=flat-square)](https://codeclimate.com/github/mdreizin/webpack-stats-writer-plugin)
[![Code Climate Coverage](https://img.shields.io/codeclimate/coverage/github/mdreizin/webpack-stats-writer-plugin.svg?style=flat-square)](https://codeclimate.com/github/mdreizin/webpack-stats-writer-plugin)
[![Dependency Status](https://img.shields.io/david/mdreizin/webpack-stats-writer-plugin.svg?style=flat-square)](https://david-dm.org/mdreizin/webpack-stats-writer-plugin)
[![Development Dependency Status](https://img.shields.io/david/dev/mdreizin/webpack-stats-writer-plugin.svg?style=flat-square)](https://david-dm.org/mdreizin/webpack-stats-writer-plugin#info=devDependencies)

<h1 id="webpack-stats-writer-plugin">webpack-stats-writer-plugin</h1>

Just saves `stats` object as is

<h2 id="webpack-stats-writer-plugin-usage">Usage</h2>

```javascript
import StatsWriterWebpackPlugin from 'stats-writer-webpack-plugin';

export default {
    plugins: [
        new StatsWriterWebpackPlugin()
    ]
};

```
