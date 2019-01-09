# egg-console-agent

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-console-agent.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-console-agent
[travis-image]: https://img.shields.io/travis/eggjs/egg-console-agent.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-console-agent
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-console-agent.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-console-agent?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-console-agent.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-console-agent
[snyk-image]: https://snyk.io/test/npm/egg-console-agent/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-console-agent
[download-image]: https://img.shields.io/npm/dm/egg-console-agent.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-console-agent

<!--
Description here.
-->

## Install

```bash
$ npm i egg-console-agent --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.consoleAgent = {
  enable: true,
  package: 'egg-console-agent',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.consoleAgent = {
  server: 'console-kl.netease.com',   // connection ws 地址
  appid: void 0,                      // appid
  secret: void 0,                     // secret
  cluster: 'online',                  // 集群名（默认使用 app.config.env）
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
