var config = require('./config.default'),
    validateConfig = require('webgme/config/validator');

// in a dockerized setting the mongo-db addddress has to be set properly
config.mongo.uri = 'mongodb://mongo:27017/webgme-pn';

validateConfig(config);
module.exports = config;
