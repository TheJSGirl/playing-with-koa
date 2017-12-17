
process.env.NODE_ENV = 'development';

const _ = require('lodash');

const baseSettings = require('./base');

const settings = {
  port: 3030,
  database: {
    host: 'localhost',
    port: 27017,
    db: 'note-app',
  },
  sessions: {
    store: {
      host: 'localhost',
      port: 27017,
      db: 'note-app',
      collection: 'sessions',
    },
  },
};

module.exports = _.merge(baseSettings, settings);
