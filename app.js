const request = require('request');

request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=united%20state%20international%20university',
  json: true
}, (error, response, body) => {
  console.log(JSON.stringify(body, undefined, 2));
});
