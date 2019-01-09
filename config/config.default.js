'use strict';

/**
 * egg-console-agent default config
 * @member Config#consoleAgent
 * @property {String} SOME_KEY - some description
 */
module.exports = (appInfo) => {
  return {
    consoleAgent: {
      server: 'console-kl.netease.com',
      appid: void 0,
      secret: void 0,
      cluster: appInfo.env,
    }
  }
}