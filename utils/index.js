module.exports = () =>{
  const esResponseParser = (payload) => new Promise(async(resolve, reject) => {
    try {
      const response = payload["hits"]["hits"]
      const responseList = []
      for(i=0; i<response.length; i++){
        responseList.push(response[i]["_source"])
      }
      resolve(responseList)
    } catch (error) {
      reject(error)
    }
  })
  return {
    esResponseParser
  }
}