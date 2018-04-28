[![NPM version](https://img.shields.io/npm/v/stats-writer-webpack-plugin.svg)](https://www.npmjs.org/package/stats-writer-webpack-plugin)
[![Travis build status](https://travis-ci.org/Fitbit/stats-writer-webpack-plugin.svg?branch=master)](https://travis-ci.org/Fitbit/stats-writer-webpack-plugin)
[![AppVeyor build status](https://ci.appveyor.com/api/projects/status/mrp6kpxlk1faxi0p/branch/master?svg=true)](https://ci.appveyor.com/project/mdreizin/stats-writer-webpack-plugin/branch/master)
[![Code Climate Maintainability](https://api.codeclimate.com/v1/badges/1d58fc7d37f37a0fd87b/maintainability)](https://codeclimate.com/github/Fitbit/stats-writer-webpack-plugin)
[![Code Climate Coverage](https://api.codeclimate.com/v1/badges/1d58fc7d37f37a0fd87b/test_coverage)](https://codeclimate.com/github/Fitbit/stats-writer-webpack-plugin)
[![Dependency Status](https://img.shields.io/david/Fitbit/stats-writer-webpack-plugin.svg)](https://david-dm.org/Fitbit/stats-writer-webpack-plugin)
[![Development Dependency Status](https://img.shields.io/david/dev/Fitbit/stats-writer-webpack-plugin.svg)](https://david-dm.org/Fitbit/stats-writer-webpack-plugin#info=devDependencies)
[![Greenkeeper badge](https://badges.greenkeeper.io/Fitbit/stats-writer-webpack-plugin.svg)](https://greenkeeper.io/)

# stats-writer-webpack-plugin

> Saves `stats` object as is

## Installation

```bash
npm install stats-writer-webpack-plugin --save-dev
```

or

```bash
yarn add stats-writer-webpack-plugin --dev
```

## Usage

`./webpack.config.js`

```javascript
import StatsWriterWebpackPlugin from 'stats-writer-webpack-plugin';

export default {
    plugins: [
        new StatsWriterWebpackPlugin()
    ]
};
```
