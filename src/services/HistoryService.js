import mongoose from 'mongoose';
import History from '../models/History';

const historyService = {
  create: async data => {
    try {
      const result = await History.create(data);
      return { body: { text: `History record created - id: ${result.id}`, id: result.id } };
    } catch (err) {
      return { body: err.message, errorCode: 500 };
    }
  },
  removeById: async id => {
    try {
      const result = await History.deleteOne({ _id: mongoose.Types.ObjectId(id) });
      return { body: result.deletedCount ? 'History record has been deleted' : 'History record not found' };
    } catch (err) {
      return { body: err.message, errorCode: 500 };
    }
  }
};
export default historyService;
