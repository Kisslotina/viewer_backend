import History from '../../models/History';
import HistoryService from '../../services/HistoryService';

module.exports = {
  '/': {
    get: async ctx => {
      ctx.body = await History.find();
    },
    post: async ctx => {
      const data = ctx.request.body;
      if (data.videoId) {
        const obj = { videoId: data.videoId };
        if (data.name) obj.name = data.name;
        const res = await HistoryService.create(obj);
        if (res.errorCode) ctx.status = res.errorCode;
        ctx.body = res.body;
      } else {
        ctx.status = 400;
        ctx.body = 'VideoId is required';
      }
    }
  },
  '/:id': {
    delete: async ctx => {
      const res = await HistoryService.removeById(ctx.params.id);
      if (res.errorCode) ctx.status = res.errorCode;
      ctx.body = res.body;
    }
  }
};
