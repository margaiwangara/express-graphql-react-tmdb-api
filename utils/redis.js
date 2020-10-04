const axios = require('axios');

function promisifyRedis(client, id) {
  return new Promise((resolve, reject) => {
    return client.get(id, (error, data) => {
      if (error) return reject(error);

      return resolve(data);
    });
  });
}

function getDataFromRedis(client, id) {
  return new Promise((resolve, reject) => {
    return promisifyRedis(client, id)
      .then((responseFromRedis) => {
        if (responseFromRedis == null) {
          // make a request to API and store data in redis
          return axios
            .get(
              `${process.env.TMDB_URL}/${id}?api_key=${process.env.TMDB_API_KEY}&append_to_response=videos,credits`,
            )
            .then((responseFromAPI) => {
              // add data to redis
              client.setex(
                responseFromAPI.data.id,
                3600,
                JSON.stringify(responseFromAPI.data),
              );

              // return original data
              return resolve(responseFromAPI.data);
            })
            .catch((error) => {
              console.log('axios error', error);
              return reject(error);
            });
        } else {
          // console.log('redis data', responseFromRedis);
          return resolve(JSON.parse(responseFromRedis));
        }
      })
      .catch((error) => {
        console.log('errorFromRedis', error);
        return reject(error);
      });
  });
}

module.exports = {
  promisifyRedis,
  getDataFromRedis,
};
