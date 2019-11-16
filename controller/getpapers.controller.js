const getPrimaryCategoryPapersService = require('../services/getpapers.services')();
module.exports = () => {
    const getSubCategroyPapers = async(req, res, next, { logger, db }) => {
        try {
            const payload = req.query
            const response = await getPrimaryCategoryPapersService.getSubCategroyPapers(payload, db, logger)
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
    const getPrimaryCategoryPapers = async(req, res, next, {logger, db}) =>{
        try {
            const payload = req.query
            const response = await getPrimaryCategoryPapersService.getPrimaryCategroyPapers(payload, db, logger)
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
        getSubCategroyPapers,
        getPrimaryCategoryPapers
    }
}