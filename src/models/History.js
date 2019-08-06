const Db = require('../db').db;

const historySchema = new Db.Schema({
  videoId: {
    type: String,
    required: 'videoId is required'
  },
  name: {
    type: String
  }
},
{
  timestamps: true
});

export default Db.model('History', historySchema);
