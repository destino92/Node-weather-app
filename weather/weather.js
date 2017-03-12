const request = require("request");

var getWeather = (lat, lng, callback) => {
  request({
    url:`https://api.darksky.net/forecast/7bf059d2c4782a52d6f8f2ffe99a4d0d/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    } else {
      console.log('Unable to fetch weather.');
    }
  });
};

module.exports.getWeather = getWeather;
