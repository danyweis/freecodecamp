
var country_name = document.getElementById('country');
var country_code = document.getElementById('country_code')
var state = document.getElementById('state');
var city = document.getElementById('city');
var postal = document.getElementById('postal');
var latitude = document.getElementById('latitude');
var longitude = document.getElementById('longitude');
var ip = document.getElementById('ipv4');


function callback(data)
{
  country_code.innerHTML = data.country_code;
  //country_name.innerHTML = data.country_name;
  state.innerHTML = data.state;
  city.innerHTML = data.city;
  postal.innerHTML = data.postal;
  latitude.innerHTML = data.latitude;
  longitude.innerHTML = data.longitude;
  //ip.innerHTML = data.IPv4;

  
};

var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = 'https://geoip-db.com/jsonp';
	var h = document.getElementsByTagName('script')[0];
	h.parentNode.insertBefore(script, h);
/*
getJSON(api.openweathermap.org/data/2.5/weather?lat={data.latitude}&lon={data.longitude});
*/

/*
console.log("api.openweathermap.org/data/2.5/weather?lat={data.latitude}&lon={data.longitude}");
*/
















/*var time = "";
var myTime = "";
var loc = document.getElementById("location");
var myLoc = "";
var temp = "";
var myTemp = "";
var logo = "";
var myLogo = "";
var fahrenheit = "";





var country = document.getElementById('country');
var state = document.getElementById('state');
var city = document.getElementById('city');
var postal = document.getElementById('postal');
var latitude = document.getElementById('latitude');
var longitude = document.getElementById('longitude');
var ip = document.getElementById('ipv4');

function callback(data)
{
  country.innerHTML = data.country_name;
  state.innerHTML = data.state;
  city.innerHTML = data.city;
  postal.innerHTML = data.postal;
  latitude.innerHTML = data.latitude;
  longitude.innerHTML = data.longitude;
  ip.innerHTML = data.IPv4;
}
*/
/*


var script = document.createElement('script');
//script.type = 'text/javascript';
script.src = 'https://geoip-db.com/jsonp';
var h = document.getElementsByTagName('script')[0];
//h.parentNode.insertBefore(script, h);




// Location avec JSON

var country = document.getElementById('country');
var state = document.getElementById('state');
var city = document.getElementById('city');
var postal = document.getElementById('postal');
var latitude = document.getElementById('latitude');
var longitude = document.getElementById('longitude');
var country_code = document.getElementById('country_code');
var ip = document.getElementById('ipv4');

function callback (data)
{
  country.innerHTML = data.country_name;
  state.innerHTML = data.state;
  city.innerHTML = data.city;
  postal.innerHTML = data.postal;
  latitude.innerHTML = data.latitude;
  longitude.innerHTML = data.longitude;
  country_code.innerHTML = data.country_code;
  ip.innerHTML = data.IPv4;
};

console.log(country);

*/

// LOCATION (code)
/*
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    loc.innerHTML =  "Geolocation is not supported by this browser.";
  }
};

function showPosition(position) {
  loc.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
};
getLocation(); // get the location on load
*/

// LOCATION (town Country)


// TEMPERATUR
/*function convertTo(celsius) {
  fahrenheit = celsius * 9/5 + 32;
  return fahrenheit;
};
*/
