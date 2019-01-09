'use strict';

const mock = require('egg-mock');

describe('test/console-agent.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/console-agent-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, consoleAgent')
      .expect(200);
  });
});
