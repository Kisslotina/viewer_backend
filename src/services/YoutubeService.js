import YouTube from 'simple-youtube-api';
import config from 'config';

const youtube = new YouTube(config.get('youtube_api.key'));

const youtubeService = {
  search: async(query = '', count = 5, options = {}) => {
    try {
      const data = await youtube.searchVideos(query, count, options);
      const result = data.map(item => {
        return { thumbnail: item.thumbnails.default, name: item.title, videoId: item.id };
      });
      return result;
    } catch (err) {
      return { body: err.message, errorCode: 500 };
    }
  }
};
export default youtubeService;
