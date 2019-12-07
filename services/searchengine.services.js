const Utils = require('../utils/index.js')()
const config = require('../config/index')
module.exports = () => {
    const searchEngine = (payload, db, logger) => new Promise(async(resolve, reject) => {
        try {
            const {
                query,
                offset,
                size,
                start_date,
                end_date
            } = payload
            const searchengine_query = {
                "from": offset,
                "size": size,
                "query": {
                    "multi_match": {
                        "query": query,
                        "type": "cross_fields",
                        "fields": [
                            "arxiv_id",
                            "abstract",
                            "title",
                            "abstract",
                            "authors",
                            "doi"
                        ],
                    }
                }
            }
            const response = await db.search({
                index: config.es_dbname,
                body: searchengine_query
            })
            const queryResult = await Utils.esResponseParser(response)
            resolve(queryResult)
        } catch (error) {
            reject(error)
        }
    })

    return {
        searchEngine
    }
}