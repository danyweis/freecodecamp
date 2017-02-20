
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
  temperature.innerHTML = data.currently.temperature;
  //console.log(data.currently.temperature);
  temperatureMax.innerHTML = data.daily.data[0].temperatureMax;
  //console.log(data.daily.data[0].temperatureMax);
  temperatureMin.innerHTML = data.daily.data[0].temperatureMin;
  //console.log(data.daily.data[0].temperatureMin);
  //humidity.innerHTML = data.currently.humidity;
  //console.log(data.currently.humidity);
  //windSpeed.innerHTML = data.currently.windSpeed;
  //console.log(data.currently.windSpeed);

// icon & background image
console.log(data.currently.icon);
}


 var script = document.createElement('script');
 	script.type = 'text/javascript';
 	script.src = 'https://geoip-db.com/jsonp';
 	var h = document.getElementsByTagName('script')[0];
 	h.parentNode.insertBefore(script, h);
