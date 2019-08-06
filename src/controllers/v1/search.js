import YouTube from 'simple-youtube-api';
import YoutubeService from '../../services/YoutubeService';

module.exports = {
  '/:query': {
    get: async ctx => {
      const res = await YoutubeService.search(ctx.params.query);
      if (res.errorCode) ctx.status = res.errorCode;
      ctx.body = res;
    }
  }
};
