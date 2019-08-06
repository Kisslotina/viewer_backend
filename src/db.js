import mongoose from 'mongoose';
import config from 'config';

class Db {
  constructor() {
    if (!this.db) {
      mongoose.set('debug', config.get('mongodb.debug'));
      mongoose.connect(config.get('mongodb.uri'), { useNewUrlParser: true, useCreateIndex: true });
      this.db = mongoose;
    }
  }
}

module.exports = new Db();
