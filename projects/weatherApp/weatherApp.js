var time = "";
var myTime = "";
var location = "";
var myLocation = "";
var temp = "";
var myTemp = "";
var logo = "";
var myLogo = "";
var fahrenheit = "";


// LOCATION
var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

var latitude = "";
var longitude = "";
var accuracy = "";

function success (pos) {
  var crd = pos.coords;
  var position = ('Your current position is :');
  latitude = (`Latitude : ${crd.latitude}`);
  longitude = (`Longitude : ${crd.longitude}`);
  accuracy = (`More or less ${crd.accuracy} meters.`);

  console.log(postiton);
  console.log(latitude);
  console.log(longitude);
  console.log(accuracy);

  //return postiton;
  //return latitude;
  //return  longitude;
  //return accuracy;
};
//var locErr = "";
//function error (err) {
//  locErr =(`ERROR(${err.code}): ${err.message}`)
//  return locErr;
//};

navigator.geolocation.getCurrentPosition(success, error, options);



// TEMPERATUR
function convertTo(celsius) {
  fahrenheit = celsius * 9/5 + 32;
  return fahrenheit;
};
