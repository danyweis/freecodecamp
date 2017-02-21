
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
