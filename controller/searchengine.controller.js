const searchengineService = require('../services/searchengine.services')();
module.exports = () => {
    const searchEngine = async(req, res, next, { logger, db }) => {
        try {
            const payload = req.query
            const response = await searchengineService.searchEngine(payload, db, logger)
            if (response) {
                res.status(200).send({
                    status: "200 OK",
                    result: response
                })
            } else {
                res.status(200).send({
                    status: "400",
                    result: "Encountered some error"
                })
            }
        } catch (error) {
            res.status(200).send({
                status: "400 fuck",
                result: error
             })

        }
    }
    return {
        searchEngine
    }
}