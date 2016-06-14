[![NPM version](http://img.shields.io/npm/v/stats-writer-webpack-plugin.svg?style=flat-square)](https://www.npmjs.org/package/stats-writer-webpack-plugin)
[![Travis build status](http://img.shields.io/travis/mdreizin/stats-writer-webpack-plugin/master.svg?style=flat-square)](https://travis-ci.org/mdreizin/stats-writer-webpack-plugin)
[![AppVeyor build status](https://img.shields.io/appveyor/ci/mdreizin/stats-writer-webpack-plugin/master.svg?style=flat-square)](https://ci.appveyor.com/project/mdreizin/stats-writer-webpack-plugin/branch/master)
[![Code Climate GPA](https://img.shields.io/codeclimate/github/mdreizin/stats-writer-webpack-plugin.svg?style=flat-square)](https://codeclimate.com/github/mdreizin/stats-writer-webpack-plugin)
[![Code Climate Coverage](https://img.shields.io/codeclimate/coverage/github/mdreizin/stats-writer-webpack-plugin.svg?style=flat-square)](https://codeclimate.com/github/mdreizin/stats-writer-webpack-plugin)
[![Dependency Status](https://img.shields.io/david/mdreizin/stats-writer-webpack-plugin.svg?style=flat-square)](https://david-dm.org/mdreizin/stats-writer-webpack-plugin)
[![Development Dependency Status](https://img.shields.io/david/dev/mdreizin/stats-writer-webpack-plugin.svg?style=flat-square)](https://david-dm.org/mdreizin/stats-writer-webpack-plugin#info=devDependencies)

<h1 id="stats-writer-webpack-plugin">stats-writer-webpack-plugin</h1>

Just saves `stats` object as is

<h2 id="stats-writer-webpack-plugin-usage">Usage</h2>

```javascript
import StatsWriterWebpackPlugin from 'stats-writer-webpack-plugin';

export default {
    plugins: [
        new StatsWriterWebpackPlugin()
    ]
};

```
