'use strict';
const consoleAgent = require('console-agent');

module.exports = class {
  constructor(app) {
    this.app = app;
    this.consoleAgent = consoleAgent;
  }

  async didReady() {
    const { consoleAgent: consoleAgentConfig } = this.app.config;
    await consoleAgent.launch(consoleAgentConfig);
  }
};
