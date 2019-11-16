const Utils = require('../utils/index.js')()
const config = require('../config/index')
module.exports = () => {
    const getSubCategroyPapers = ( payload, db, logger ) => new Promise(async(resolve, reject) => {
        try {
            const { category, offset, size, start_date, end_date } = payload
            const get_sub_category_query = {
                "from": offset,
                "size": size,
                "query": {
                    "bool": {
                        "must": [{
                            "match": {
                                "categories": category,
                            },
                        }, ],
                        "filter": [{
                            "range": {
                                "created": {
                                    "gte": start_date,
                                    "lte": end_date,
                                    "format": "yyyy-MM-dd",
                                },
                            },
                        }, ],
                    },
                },
            }
            const response = await db.search({
                index: config.es_dbname,
                body: get_sub_category_query
            })
            const queryResult = await Utils.esResponseParser(response)
            resolve(queryResult)
        } catch (error) {
            reject(error)
        }
    })
    const getPrimaryCategroyPapers = ( payload, db, logger ) => new Promise(async(resolve, reject) => {
        try {
            const { primary_category, offset, size, start_date, end_date } = payload
            const get_sub_category_query = {
                "from": offset,
                "size": size,
                "query": {
                    "bool": {
                        "must": [{
                            "match": {
                                "primary_category": primary_category,
                            },
                        }, ],
                        "filter": [{
                            "range": {
                                "created": {
                                    "gte": start_date,
                                    "lte": end_date,
                                    "format": "yyyy-MM-dd",
                                },
                            },
                        }, ],
                    },
                },
            }
            const response = await db.search({
                index: config.es_dbname,
                body: get_sub_category_query
            })
            const queryResult = await Utils.esResponseParser(response)
            resolve(queryResult)
        } catch (error) {
            reject(error)
        }
    })
    return {
        getSubCategroyPapers,
        getPrimaryCategroyPapers
    }
}