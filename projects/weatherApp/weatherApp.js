var locat = {
lat :"",
long :"",
urlStart : "api.openweathermap.org/data/2.5/weather?lat=",
key : "&appid=88ed677935f66ca8ba614806bb5b6618",
longi : "&lon=",
// is depend on location
fahrenheir : "&units=imperial",
celsius : "&units=metric"
}

urlCel = locat.urlStart + locat.lat + locat.longi + locat.long + locat.key + locat.celsius;
urlFar = locat.urlStart + locat.lat + locat.longi + locat.long + locat.key + locat.farenheir;
// function that calls the position

function getLocation () {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(showPosition);
  } else {
    x.innerHTML = "Geolocationis not supported by the browser.";
  }
};
getLocation();
// function that returns the position
theLocationIs="";
function showPosition(position) {

  locat.lat = (position.coords.latitude);
  locat.long = (position.coords.longitude);






console.log(

theLocationIs = locat.urlStart + locat.lat + locat.longi + locat.long + locat.key + locat.celsius);

return theLocationIs;

callData();
gotData();
};



function callData(){

    //JSON.parse(theLocationIs, gotData);
    JSON.parse("api.openweathermap.org/data/2.5/weather?lat=43.433051299999995&lon=6.7378997&appid=88ed677935f66ca8ba614806bb5b6618&units=metric", gotData);
};

function gotData (dataWeather){

    console.log(dataWeather);
    document.getElementById('city').innerHTML = dataWeather;
};

console.log('im here');
// now we call the JSON API
/*
console.log(array);
lat = array[0];
long = array[1];
console.log(lat);
console.log(long);
*/































/*var country_name = document.getElementById('country');
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








    var lat = select('#latitude');
    var lon = select('#longitude');
    var key = "&appid=88ed677935f66ca8ba614806bb5b6618";
    var urlStart = "api.openweathermap.org/data/2.5/weather?lat=";
    var long = "&lon=";
    var url = urlStart + latX + long + lonY + key ;
    var fahrenheir = "&units=imperial";
    var celsius = "&units=metric";

    function callData(){
      loadJSON(url, gotData);
    };

    function gotData (dataWeather){
      console.log(dataWeather);
    };






*/








//api.openweathermap.org/data/2.5/weather?q={city name}
//api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}
/*var key = "&appid=88ed677935f66ca8ba614806bb5b6618";
var urlStart = "api.openweathermap.org/data/2.5/weather?lat={";
var long = "}&lon={"; // after "}";
var url = urlStart + latX + long + lonY + "}";

*/







/*
  function callData(){
    loadJSON(url, gotData);
  };

  function gotData (data){
    console.log(data);
  };*/
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
