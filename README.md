[![NPM version](http://img.shields.io/npm/v/stats-writer-webpack-plugin.svg)](https://www.npmjs.org/package/stats-writer-webpack-plugin)
[![Travis build status](http://img.shields.io/travis/Fitbit/stats-writer-webpack-plugin/master.svg)](https://travis-ci.org/Fitbit/stats-writer-webpack-plugin)
[![AppVeyor build status](https://img.shields.io/appveyor/ci/mdreizin/stats-writer-webpack-plugin/master.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjAgMGMxMSAwIDIwIDkgMjAgMjBzLTkgMjAtMjAgMjBTMCAzMSAwIDIwIDkgMCAyMCAwem00LjkgMjMuOWMyLjItMi44IDEuOS02LjgtLjktOC45LTIuNy0yLjEtNi43LTEuNi05IDEuMi0yLjIgMi44LTEuOSA2LjguOSA4LjkgMi44IDIuMSA2LjggMS42IDktMS4yem0tMTAuNyAxM2MxLjIuNSAzLjggMSA1LjEgMUwyOCAyNS4zYzIuOC00LjIgMi4xLTkuOS0xLjgtMTMtMy41LTIuOC04LjQtMi43LTExLjkgMEwyLjIgMjEuNmMuMyAzLjIgMS4yIDQuOCAxLjIgNC45bDYuOS03LjVjLS41IDMuMy43IDYuNyAzLjUgOC44IDIuNCAxLjkgNS4zIDIuNCA4LjEgMS44bC03LjcgNy4zeiIgZmlsbD0iI0NDQyIgZmlsbC1ydWxlPSJub256ZXJvIi8%2BPC9zdmc%2B)](https://ci.appveyor.com/project/mdreizin/stats-writer-webpack-plugin/branch/master)
[![Code Climate GPA](https://img.shields.io/codeclimate/github/Fitbit/stats-writer-webpack-plugin.svg)](https://codeclimate.com/github/Fitbit/stats-writer-webpack-plugin)
[![Code Climate Coverage](https://img.shields.io/codeclimate/coverage/github/Fitbit/stats-writer-webpack-plugin.svg)](https://codeclimate.com/github/Fitbit/stats-writer-webpack-plugin)
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
