const Utils = require('../utils/index.js')()
const config = require('../config/index')
module.exports = () => {
    const advanceSearchEngine = ( payload, db, logger ) => new Promise(async(resolve, reject) => {
        // try {
            const { fieldname, query, offset, size, start_date, end_date } = payload
            const advancesearchengine_query = {
                "from": offset,
                "size": size,
                "query": {
                  "bool": {
                    "must": [
                      {
                    "match": {
                        [fieldname]: query,
                    }
                }
            ],
            "filter": [
                {
                    "range": {
                        "created": {
                            "gte": start_date,
                            "lte": end_date,
                            
                        }
                    }
                }
            ]
        }
    }
}
            const response = await db.search({
                index: config.es_dbname,
                body: advancesearchengine_query
            })
            const queryResult = await Utils.esResponseParser(response)
            resolve(queryResult)
        // } catch (error) {
            // reject(error)
        // }
    })
    
    return {
        advanceSearchEngine
    }
}