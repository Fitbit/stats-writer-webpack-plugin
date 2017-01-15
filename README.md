[![NPM version](http://img.shields.io/npm/v/stats-writer-webpack-plugin.svg?style=flat-square)](https://www.npmjs.org/package/stats-writer-webpack-plugin)
[![Travis build status](http://img.shields.io/travis/Fitbit/stats-writer-webpack-plugin/master.svg?style=flat-square)](https://travis-ci.org/Fitbit/stats-writer-webpack-plugin)
[![AppVeyor build status](https://img.shields.io/appveyor/ci/Fitbit/stats-writer-webpack-plugin/master.svg?style=flat-square)](https://ci.appveyor.com/project/Fitbit/stats-writer-webpack-plugin/branch/master)
[![Code Climate GPA](https://img.shields.io/codeclimate/github/Fitbit/stats-writer-webpack-plugin.svg?style=flat-square)](https://codeclimate.com/github/Fitbit/stats-writer-webpack-plugin)
[![Code Climate Coverage](https://img.shields.io/codeclimate/coverage/github/Fitbit/stats-writer-webpack-plugin.svg?style=flat-square)](https://codeclimate.com/github/Fitbit/stats-writer-webpack-plugin)
[![Dependency Status](https://img.shields.io/david/Fitbit/stats-writer-webpack-plugin.svg?style=flat-square)](https://david-dm.org/Fitbit/stats-writer-webpack-plugin)
[![Development Dependency Status](https://img.shields.io/david/dev/Fitbit/stats-writer-webpack-plugin.svg?style=flat-square)](https://david-dm.org/Fitbit/stats-writer-webpack-plugin#info=devDependencies)

<a name="stats-writer-webpack-plugin"></a>
# stats-writer-webpack-plugin

Just saves `stats` object as is

<a name="stats-writer-webpack-plugin-usage"></a>
## Usage

```javascript
import StatsWriterWebpackPlugin from 'stats-writer-webpack-plugin';

export default {
    plugins: [
        new StatsWriterWebpackPlugin()
    ]
};

```
