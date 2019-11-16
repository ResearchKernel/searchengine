const elasticsearch = require('elasticsearch');
const config = require('./config');
const logger = require('./logger')();

const { env } = config;
let uri = '';

if (config.iselasticsearchUri) {
    uri = config.elasticsearch_uri;
} else if (env === 'production') {
    uri = `http://${config.elasticsearch_username}:${config.elasticsearch_password}@${
    config.elasticsearch_host
    }:${config.elasticsearch_port}/${config.elasticsearch_dbname}`;
} else {
    uri = `http://${config.elasticsearch_host}:${config.elasticsearch_port}
    }`;
}

const client = new elasticsearch.Client({
    node: uri,
});

module.exports = client;