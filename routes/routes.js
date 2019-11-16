const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
// eslint-disable-next-line max-len
const getPaperController = require('../controller/getpapers.controller')();
const searchengineController = require('../controller/searchengine.controller')()
const advancesearchengineController = require('../controller/advancesearch.controller')()
module.exports = ({ logger, db }) => {
    router
        .route('/get-subcategory-papers')
        .get((req, res, next) => getPaperController
            .getSubCategroyPapers(req, res, next, { logger, db }));
    router
        .route('/get-primarycategory-papers')
        .get((req, res, next) => getPaperController
            .getPrimaryCategoryPapers(req, res, next, { logger, db }));
    router
        .route('/search')
        .get((req, res, next) => searchengineController
            .searchEngine(req, res, next, { logger, db }));
    router
        .route('/advancedsearch')
        .get((req, res, next) => advancesearchengineController
            .advanceSearchEngine(req, res, next, { logger, db }));
    return router;
};