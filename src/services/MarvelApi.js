const axios = require('axios');

const urlBaseMarvel = 'https://gateway.marvel.com:443/v1/public/';
const apiKey = process.env.API_KEY;

export default {
  getAllComics: (limit, callback) => {
    const urlComics = urlBaseMarvel + 'comics?apikey=' + apiKey + '&limit=' + limit;

    axios.get(urlComics).then((comics) => {
        if (callback) {
            callback(comics);
        }
    });
  }
}

