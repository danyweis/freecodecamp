
 var urlStart = "https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?lat=";
 var key = "&appid=88ed677935f66ca8ba614806bb5b6618";
 var longi = "&lon=";
 var celsius = "&units=metric";


 var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;
  var lat = crd.latitude;
  var long = crd.longitude;
  var acc = crd.accuracy;
  console.log(lat + ", " + long + ", " + acc);
  createURL(lat, long);
};

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
};

navigator.geolocation.getCurrentPosition(success, error, options);



function createURL(latit, longit){
  var theURL = urlStart + latit + longi + longit + key + celsius;
  console.log(theURL);
  callData(theURL);
}


function callData(address) {


  var request = new XMLHttpRequest();
request.open('GET', address, true);

var theRequest = new XMLHttpRequest();

theRequest.open('get', address, true);
  theRequest.onload = function () {
     theData = JSON.parse(theRequest.response);

  weather(theData);
 // console.log(theData);
  };
  theRequest.send();


};
/*
var timezone = document.getElementById('timeZone');
var temperature = document.getElementById('temp');
var temperatureMax = document.getElementById('maxTemp');
var temperatureMin = document.getElementById('minTemp');
//var humidity = document.getElementById('');
//var windSpeed = document.getElementById('');

//var icon = document.getElementById('');
*/
function weather (data){
  //timezone.innerHTML = data.timezone;
  console.log(data.name);
  //temperature.innerHTML = Math.round(data.currently.temperature);
  console.log(data.sys.country);
 // temperatureMax.innerHTML = Math.round(data.daily.data[0].temperatureMax);
 console.log(data.main.temp);
  //temperatureMin.innerHTML = Math.round(data.daily.data[0].temperatureMin);
  console.log(data.wind.speed);
  //humidity.innerHTML = data.currently.humidity;
  console.log(data.weather[0].id);
  //windSpeed.innerHTML = data.currently.windSpeed;
  console.log(data.weather[0].icon);

// icon & background image
//console.log(data.currently.icon);
//change(data.weather[0].icon, data.weather[0].id);
}

// function for icons and bg's

function change(imgs, more) {
var bg = document.getElementById("app");
  if (more === 900) {// tornado


  } else if (more === 901) {// tropical storm


  } else if (more === 902) {// hurricane


  } else if (more === 903) {// cold


  } else if (more === 904) {// hot


  } else if (more === 905) {// windy


  } else if (more === 906) {// hail


  } else{


  if(imgs === "01d") {// clear sky day

    bg.style.background = "url('https://raw.githubusercontent.com/danyweis/pics4codepen/master/weather/bg/clear-day.jpg')no-repeat center";

    bg.style.backgroundSize = "cover";

  } else if (imgs === "01n") {// clear sky night

    bg.style.background = "url('https://raw.githubusercontent.com/danyweis/pics4codepen/master/weather/bg/clear-night.jpg')no-repeat center";

    bg.style.backgroundSize = "cover";

  } /***************************/

    else if (imgs === "02d") {// few clouds day

     bg.style.background =  "url('https://raw.githubusercontent.com/danyweis/pics4codepen/master/weather/bg/partly-cloudy-day.jpg')no-repeat center";

    bg.style.backgroundSize = "cover";

  } else if (imgs === "02n") {// few clouds night

   bg.style.background = "url('')no-repeat center";

    bg.style.backgroundSize = "cover";

  } /***************************/

    else if (imgs === "03d") {// scattered clouds day

    bg.style.background = "url('')no-repeat center";

    bg.style.backgroundSize = "cover";

  } else if (imgs === "03n") {// scattered clouds night

    bg.style.background = "url('https://raw.githubusercontent.com/danyweis/pics4codepen/master/weather/bg/partly-cloudy-night.jpg')no-repeat center";

    bg.style.backgroundSize = "cover";

  } /***************************/

    else if (imgs === "04d") {// scattered clouds night

    bg.style.background = "url('https://raw.githubusercontent.com/danyweis/pics4codepen/master/weather/bg/cloudy.jpg')no-repeat center";

    bg.style.backgroundSize = "cover";

  }else if (imgs === "04n") {// scattered clouds night

    bg.style.background = "url('')no-repeat center";

    bg.style.backgroundSize = "cover";

  } /***************************/

    else if (imgs === "sleet") {// scattered clouds day

    bg.style.background = "url('https://raw.githubusercontent.com/danyweis/pics4codepen/master/weather/bg/snow.jpg')no-repeat center";

    bg.style.backgroundSize = "cover";

  } else if (imgs === "wind")
  {
    bg.style.background = "url('https://raw.githubusercontent.com/danyweis/pics4codepen/master/weather/bg/wind.jpg')no-repeat center";

    bg.style.backgroundSize = "cover";

  } else if (imgs === "fog")
  {
    bg.style.background = "url('https://raw.githubusercontent.com/danyweis/pics4codepen/master/weather/bg/fog.jpg')no-repeat center";

    bg.style.backgroundSize = "cover";

  } else if (imgs === "")
  {
    bg.style.background = "url('')no-repeat center";

    bg.style.backgroundSize = "cover";

  } else if (imgs === "rain")
  {
    bg.style.background = "url('https://raw.githubusercontent.com/danyweis/pics4codepen/master/weather/bg/rain.jpg')no-repeat center";



    bg.style.backgroundSize = "cover";

  } else if (imgs === "snow")
  {
     bg.style.background = "url('https://raw.githubusercontent.com/danyweis/pics4codepen/master/weather/bg/snow.jpg')no-repeat center";




    bg.style.backgroundSize = "cover";

  } else if (imgs === "hail")
  {
    bg.style.background = "url('https://raw.githubusercontent.com/danyweis/pics4codepen/master/weather/bg/hail.jpg')no-repeat center";

    bg.style.backgroundSize = "cover";

  } else if (imgs === "thunderstorm")
  {
    bg.style.background = "url('https://raw.githubusercontent.com/danyweis/pics4codepen/master/weather/bg/thunderstorm.jpg')no-repeat center";

    bg.style.backgroundSize = "cover";

  } else if (imgs === "tornado")
  {
    bg.style.background = "url('https://raw.githubusercontent.com/danyweis/pics4codepen/master/weather/bg/tornado.jpg')no-repeat center";

    bg.style.backgroundSize = "cover";

  } else {

  }
  }
}




























/*function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    loc.innerHTML =  "Geolocation is not supported by this browser.";
  }
  };


function showPosition(position) {
var lat = position.coords.latitude;
var long = position.coords.longitude;
console.log(lat + "," + long);

 };
 getLocation(); // get the location on load


*/
/*
var country_code = document.getElementById('country_code');

var city = document.getElementById('city');
var state = document.getElementById('state');

var theData;
function callback(data)
{
  country_code.innerHTML = data.country_code;
  state.innerHTML = data.state;
  city.innerHTML = data.city;

console.log(data.country_name);
  console.log(data.city);
   console.log(data.state);

  createURL(data.latitude.toString(), data.longitude.toString());
 };

 function createURL(x, y) {
  var theURL = "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/405ddb43858fde92eea9e80833bbcf06/" + x + "," + y + "?units=si";
   console.log(theURL);

   callData(theURL);
 };




function callData(address) {


  var request = new XMLHttpRequest();
request.open('GET', address, true);

var theRequest = new XMLHttpRequest();

theRequest.open('get', address, true);
  theRequest.onload = function () {
     theData = JSON.parse(theRequest.response);

  weather(theData);

  };
  theRequest.send();


};

var timezone = document.getElementById('timeZone');
var temperature = document.getElementById('temp');
var temperatureMax = document.getElementById('maxTemp');
var temperatureMin = document.getElementById('minTemp');
//var humidity = document.getElementById('');
//var windSpeed = document.getElementById('');

//var icon = document.getElementById('');

function weather (data){
  timezone.innerHTML = data.timezone;
  //console.log(data.timezone);
  temperature.innerHTML = Math.round(data.currently.temperature);
  //console.log(data.currently.temperature);
  temperatureMax.innerHTML = Math.round(data.daily.data[0].temperatureMax);
  //console.log(data.daily.data[0].temperatureMax);
  temperatureMin.innerHTML = Math.round(data.daily.data[0].temperatureMin);
  //console.log(data.daily.data[0].temperatureMin);
  //humidity.innerHTML = data.currently.humidity;
  //console.log(data.currently.humidity);
  //windSpeed.innerHTML = data.currently.windSpeed;
  //console.log(data.currently.windSpeed);

// icon & background image
console.log(data.currently.icon);
change(data.currently.icon);
}

// function for icons and bg's

function change(imgs) {
var bg = document.getElementById("app");


  if(imgs === "clear-day")
{
    bg.style.background = "url('https://raw.githubusercontent.com/danyweis/pics4codepen/master/weather/bg/clear-day.jpg')no-repeat center";

    bg.style.backgroundSize = "cover";

  } else if (imgs === "clear-night")
  {
    bg.style.background = "url('https://raw.githubusercontent.com/danyweis/pics4codepen/master/weather/bg/clear-night.jpg')no-repeat center";

    bg.style.backgroundSize = "cover";

  } else if (imgs === "rain")
  {
    bg.style.background = "url('https://raw.githubusercontent.com/danyweis/pics4codepen/master/weather/bg/rain.jpg')no-repeat center";

    bg.style.backgroundSize = "cover";

  } else if (imgs === "snow")
  {
    bg.style.background = "url('https://raw.githubusercontent.com/danyweis/pics4codepen/master/weather/bg/snow.jpg')no-repeat center";

    bg.style.backgroundSize = "cover";

  } else if (imgs === "sleet")
  {
    bg.style.background = "url('https://raw.githubusercontent.com/danyweis/pics4codepen/master/weather/bg/snow.jpg')no-repeat center";

    bg.style.backgroundSize = "cover";

  } else if (imgs === "wind")
  {
    bg.style.background = "url('https://raw.githubusercontent.com/danyweis/pics4codepen/master/weather/bg/wind.jpg')no-repeat center";

    bg.style.backgroundSize = "cover";

  } else if (imgs === "fog")
  {
    bg.style.background = "url('https://raw.githubusercontent.com/danyweis/pics4codepen/master/weather/bg/fog.jpg')no-repeat center";

    bg.style.backgroundSize = "cover";

  } else if (imgs === "cloudy")
  {
    bg.style.background = "url('https://raw.githubusercontent.com/danyweis/pics4codepen/master/weather/bg/cloudy.jpg')no-repeat center";

    bg.style.backgroundSize = "cover";

  } else if (imgs === "partly-cloudy-day")
  {
    bg.style.background =  "url('https://raw.githubusercontent.com/danyweis/pics4codepen/master/weather/bg/partly-cloudy-day.jpg')no-repeat center";

    bg.style.backgroundSize = "cover";

  } else if (imgs === "partly-cloudy-night")
  {
    bg.style.background = "url('https://raw.githubusercontent.com/danyweis/pics4codepen/master/weather/bg/partly-cloudy-night.jpg')no-repeat center";

    bg.style.backgroundSize = "cover";

  } else if (imgs === "hail")
  {
    bg.style.background = "url('https://raw.githubusercontent.com/danyweis/pics4codepen/master/weather/bg/hail.jpg')no-repeat center";

    bg.style.backgroundSize = "cover";

  } else if (imgs === "thunderstorm")
  {
    bg.style.background = "url('https://raw.githubusercontent.com/danyweis/pics4codepen/master/weather/bg/thunderstorm.jpg')no-repeat center";

    bg.style.backgroundSize = "cover";

  } else if (imgs === "tornado")
  {
    bg.style.background = "url('https://raw.githubusercontent.com/danyweis/pics4codepen/master/weather/bg/tornado.jpg')no-repeat center";

    bg.style.backgroundSize = "cover";

  } else {

  }
}

 var script = document.createElement('script');
 	script.type = 'text/javascript';
 	script.src = 'https://geoip-db.com/jsonp';
 	var h = document.getElementsByTagName('script')[0];
 	h.parentNode.insertBefore(script, h);
*/
