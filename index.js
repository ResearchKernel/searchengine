const dotenv = require('dotenv');

dotenv.config();
// Body Parser for req/res
const bodyParser = require('body-parser');

const express = require('express');
/**
 * Middleware Decleration
 */

// using CORS
const cors = require('cors');

// Helmet for request security.
const config = require('./config');


// Bunyan logger
const logger = require('./logger')();

// express init
const app = express();

// CORS
app.use(cors());

// Body Parser config
app.use(bodyParser.urlencoded({
    parameterLimit: 10,
    limit: '1mb',
    extended: false,
}));

// Json Parser config
app.use(bodyParser.json());

// Configure databases here.
const elasticsearch = require('./elasticsearch');

app.use(
    '/api/v1',
    require('./routes/routes')({ logger, db: elasticsearch }),
);
/**
 * Server
 */
app.listen(config.port, () => {
    console.log(`Server listening on port: ${config.port}`);
});