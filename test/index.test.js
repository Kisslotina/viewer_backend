import assert from 'assert';
import request from 'request-promise';
import app from '../src/app';

describe('app tests', () => {
  let server;
  before(done => {
    server = app.listen(3000, done);
  });

  after(done => {
    server.close(done);
  });

  describe('success story', () => {
    const userUrl = 'http://localhost:3000/api/v1/history';

    it('should create and delete history record', async() => {
      const r1 = await request({
        uri: userUrl,
        method: 'POST',
        body: { videoId: '12345667test', name: 'testName' },
        json: true
      });
      assert.notStrictEqual(r1.id, null);
      const r2 = await request({
        uri: `${userUrl}/${r1.id}`,
        method: 'DELETE'
      });
      assert.strictEqual(r2, 'History record has been deleted');
    });
  });
});
