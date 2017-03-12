const request = require('request');

module.exports.geocodeAddress = function(address){
  var encodedAddress = encodeURIComponent(address);

  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json: true
  }, (error, response, body) => {
    if(error) {
      console.log('Unable to connect to Google servers.');
    } else if (body.status === 'ZERO_RESULTS') {
      console.log('Unable to find that address');
    } else if (body.status === 'OK') {
      console.log(`Adress: ${body.results[0].formatted_address}`);
      console.log(`Lat: ${body.results[0].geometry.location.lat}` );
      console.log(`Lng: ${body.results[0].geometry.location.lng}` );
    }

  });
}