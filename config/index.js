module.exports = {
    // server config
    port: process.env.NODE_PORT,
    name: 'searchengine',
    env: process.env.NODE_ENV,
    base_uri: process.env.BASE_URI,
    host: process.env.HOST,

    // esdb config
    isesUri: false,
    es_host: process.env.ES_HOST,
    es_port: process.env.ES_PORT,
    es_dbname: process.env.ES_DBNAME,
    es_uri: process.env.ES_URI,

};