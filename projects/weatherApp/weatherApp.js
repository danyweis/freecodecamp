// I worked with OpenWeatherMap and to get the api with https I would have to paie but I did if you go in with https I go over a website to give me CORS https for my call else I go over the IP adress i did want to do it this way because the location with the IP never did get my real position so like this it works in both situations

// I did get the CORS on "https://cors-anywhere.herokuapp.com/" and I did this because of codepen

// to create the URL
 var urlStart = "";
 var key = "&appid=88ed677935f66ca8ba614806bb5b6618";
 var longi = "&lon=";
 var celsius = "&units=metric";




// if you login with http

if(window.location.protocol === 'http:'){
  var urlStart = "http://api.openweathermap.org/data/2.5/weather?lat=";
  //console.log(urlStart);

function callIP() {

  var theIP = new XMLHttpRequest();
theIP.open('GET', 'http://ip-api.com/json', true);

  theIP.onload = function () {
     theIPData = JSON.parse(theIP.response);

 getIPData(theIPData);
 //console.log(theIPData);
  };
  theIP.send();

};
 callIP();


  function getIPData(ipData){
    var lat = ipData.lat;
    var long = ipData.lon;

    createURL(lat.toString(), long.toString());
    //console.log(lat.toString() + "," + long.toString());
  }

  function createURL(latit, longit){
  var theURL = urlStart + latit + longi + longit + key + celsius;
  //console.log(theURL);
  callData(theURL);
  }
function callData(address) {

var theRequest = new XMLHttpRequest();

theRequest.open('get', address, true);
  theRequest.onload = function () {
     var theData = JSON.parse(theRequest.response);

  weather(theData);
  console.log(theData);
  };
  theRequest.send();

};

} else if(window.location.protocol === 'https:'){

  var urlStart = "https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?lat=";

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
  //console.log(lat + ", " + long + ", " + acc);
  createURL(lat, long);
};

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
};

navigator.geolocation.getCurrentPosition(success, error, options);



function createURL(latit, longit){
  var theURL = urlStart + latit + longi + longit + key + celsius;
  //console.log(theURL);
  callData(theURL);
};
};
function callData(address) {

var theRequest = new XMLHttpRequest();

theRequest.open('get', address, true);
  theRequest.onload = function () {
     theData = JSON.parse(theRequest.response);

  weather(theData);
 // console.log(theData);
  };
  theRequest.send();

};

var city = document.getElementById('city');
var temperature = document.getElementById('temp');
var country = document.getElementById('country');
var temperatureMin = document.getElementById('minTemp');
var humidity = document.getElementById('humidity');
var windSpeed = document.getElementById('windSpeed');
var icon = document.getElementById('logo');

function weather (data){
  city.innerHTML = data.name;
 // console.log(data.name);
  country.innerHTML = data.sys.country;
 // console.log(data.sys.country);
  temperature.innerHTML = Math.round(data.main.temp);
 // console.log(data.main.temp);
  windSpeed.innerHTML = Math.round(data.wind.speed);
 // console.log(data.wind.speed);
  humidity.innerHTML = data.main.humidity;
  //console.log(data.main.humidity);
  //console.log(data.weather[0].icon);

// icon & background image
change(data.weather[0].icon, data.weather[0].id);

};

// function for icons and bg's

function change(imgs, more) {
var bg = document.getElementById("app");
  if (more === 900) {// tornado
  // background :
    bg.style.background = "url('https://raw.githubusercontent.com/danyweis/pics4codepen/master/weather/bg/900Tornado.jpg')no-repeat center";

    bg.style.backgroundSize = "cover";

    // icon :
    icon.src = "https://raw.githubusercontent.com/danyweis/pics4codepen/master/weather/icon/900tornado.png";

  } else if (more === 901) {// tropical storm
  // background :
    bg.style.background = "url('https://raw.githubusercontent.com/danyweis/pics4codepen/master/weather/bg/901TropicalStorm.jpg')no-repeat center";

    bg.style.backgroundSize = "cover";

    // icon :
    icon.src = "https://raw.githubusercontent.com/danyweis/pics4codepen/master/weather/icon/901-902-905wind.png";

  } else if (more === 902) {// hurricane
  // background :
    bg.style.background = "url('https://raw.githubusercontent.com/danyweis/pics4codepen/master/weather/bg/902Hurricane.jpg')no-repeat center";

    bg.style.backgroundSize = "cover";

    // icon :
     icon.src = "https://raw.githubusercontent.com/danyweis/pics4codepen/master/weather/icon/901-902-905wind.png";

  } else if (more === 903) {// cold
  // background :
    bg.style.background = "url('https://raw.githubusercontent.com/danyweis/pics4codepen/master/weather/bg/903Cold.jpg')no-repeat center";

    bg.style.backgroundSize = "cover";

    // icon :
    icon.src = "https://raw.githubusercontent.com/danyweis/pics4codepen/master/weather/icon/903cold1.png";

  } else if (more === 904) {// hot
  // background :
    bg.style.background = "url('https://raw.githubusercontent.com/danyweis/pics4codepen/master/weather/bg/904Hot.jpg')no-repeat center";

    bg.style.backgroundSize = "cover";

    // icon :
    icon.src = "https://raw.githubusercontent.com/danyweis/pics4codepen/master/weather/icon/904hot.png";

  } else if (more === 905) {// windy
  // background :
    bg.style.background = "url('https://raw.githubusercontent.com/danyweis/pics4codepen/master/weather/dandelion-463928_1920.jpg')no-repeat center";

    bg.style.backgroundSize = "cover";

    // icon :
     icon.src = "https://raw.githubusercontent.com/danyweis/pics4codepen/master/weather/icon/901-902-905wind.png";

  } else if (more === 906) {// hail
  // background :
    bg.style.background = "url('https://raw.githubusercontent.com/danyweis/pics4codepen/master/weather/bg/906Hail.jpg')no-repeat center";

    bg.style.backgroundSize = "cover";

    // icon :
    icon.src = "https://raw.githubusercontent.com/danyweis/pics4codepen/master/weather/icon/906hail.png";

  } else if(imgs === "01d") {// clear sky day
  // background :
    bg.style.background = "url('https://raw.githubusercontent.com/danyweis/pics4codepen/master/weather/bg/01dClearSky.jpg')no-repeat center";

    bg.style.backgroundSize = "cover";

    // icon :
    icon.src = "https://raw.githubusercontent.com/danyweis/pics4codepen/master/weather/icon/01clear-day.png";

  } else if (imgs === "01n") {// clear sky night
    // background :
    bg.style.background = "url('https://raw.githubusercontent.com/danyweis/pics4codepen/master/weather/bg/01nClearSky.jpg')no-repeat center";

    bg.style.backgroundSize = "cover";

    // icon :
    icon.src = "https://raw.githubusercontent.com/danyweis/pics4codepen/master/weather/icon/01clear-night.png";

  }

    else if (imgs === "02d") {// few clouds day

     // background :
    bg.style.background = "url('https://raw.githubusercontent.com/danyweis/pics4codepen/master/weather/bg/02dFewCouds.jpg')no-repeat center";

    bg.style.backgroundSize = "cover";

    // icon :
    icon.src = "https://raw.githubusercontent.com/danyweis/pics4codepen/master/weather/icon/02partly-cloudy-day.png";

  } else if (imgs === "02n") {// few clouds night

   // background :
    bg.style.background = "url('https://raw.githubusercontent.com/danyweis/pics4codepen/master/weather/bg/02nFewClouds.jpg')no-repeat center";

    bg.style.backgroundSize = "cover";

    // icon :
    icon.src = "https://raw.githubusercontent.com/danyweis/pics4codepen/master/weather/icon/02partly-cloudy-night.png";

  }

    else if (imgs === "03d") {// scattered clouds day
    // background :
    bg.style.background = "url('https://raw.githubusercontent.com/danyweis/pics4codepen/master/weather/bg/03dScatteredClouds.jpg')no-repeat center";

    bg.style.backgroundSize = "cover";

    // icon :
    icon.src = "https://raw.githubusercontent.com/danyweis/pics4codepen/master/weather/icon/03cloudy.png";


  } else if (imgs === "03n") {// scattered clouds night

  // background :
    bg.style.background = "url('https://raw.githubusercontent.com/danyweis/pics4codepen/master/weather/bg/03nScatteredClouds.jpg')no-repeat center";

    bg.style.backgroundSize = "cover";

    // icon :
    icon.src = "https://raw.githubusercontent.com/danyweis/pics4codepen/master/weather/icon/03cloudy.png";

  }

    else if (imgs === "04d") {// broken clouds day

    // background :
    bg.style.background = "url('https://raw.githubusercontent.com/danyweis/pics4codepen/master/weather/bg/04dBrokenClouds.jpg')no-repeat center";

    bg.style.backgroundSize = "cover";

    // icon :
    icon.src="https://raw.githubusercontent.com/danyweis/pics4codepen/master/weather/icon/04broken-clouds.png";

  }else if (imgs === "04n") {// broken clouds night

    // background :
    bg.style.background = "url('https://raw.githubusercontent.com/danyweis/pics4codepen/master/weather/bg/04nBrokenClouds.jpg')no-repeat center";

    bg.style.backgroundSize = "cover";

    // icon :
    icon.src = "https://raw.githubusercontent.com/danyweis/pics4codepen/master/weather/icon/04broken-clouds.png";

  }

  else if (imgs === "09d") {// shower rain day

    // background :
    bg.style.background = "url('https://raw.githubusercontent.com/danyweis/pics4codepen/master/weather/bg/09dShowerRain.jpg')no-repeat center";

    bg.style.backgroundSize = "cover";

    // icon :
    icon.src = "https://raw.githubusercontent.com/danyweis/pics4codepen/master/weather/icon/09shower-rain.png";

  } else if (imgs === "09n") {// shower rain night

    // background :
    bg.style.background = "url('https://raw.githubusercontent.com/danyweis/pics4codepen/master/weather/bg/09nShowerRain.jpg')no-repeat left";

    bg.style.backgroundSize = "cover";

    // icon :
    icon.src = "https://raw.githubusercontent.com/danyweis/pics4codepen/master/weather/icon/09shower-rain.png";

  }
  else if (imgs === "10d") {// rain day

    // background :
    bg.style.background = "url('https://raw.githubusercontent.com/danyweis/pics4codepen/master/weather/bg/10dRain.jpg')no-repeat center";

    bg.style.backgroundSize = "cover";

    // icon :
    icon.src = "https://raw.githubusercontent.com/danyweis/pics4codepen/master/weather/icon/10sun-rain.png";

  } else if (imgs === "10n") {// rain night

    // background :
    bg.style.background = "url('https://raw.githubusercontent.com/danyweis/pics4codepen/master/weather/bg/10nRain.jpg')no-repeat right";

    bg.style.backgroundSize = "cover";

    // icon :
    icon.src = "https://raw.githubusercontent.com/danyweis/pics4codepen/master/weather/icon/10moon-rain.png";

  }
  else if (imgs === "11d") {// thunderstorm day

    // background :
    bg.style.background = "url('https://raw.githubusercontent.com/danyweis/pics4codepen/master/weather/bg/11dThunderstorm.jpg')no-repeat right";

    bg.style.backgroundSize = "cover";

    // icon :
    icon.src = "https://raw.githubusercontent.com/danyweis/pics4codepen/master/weather/icon/11thunderstorm.png";

  } else if (imgs === "11n") {// thunderstorm night

    // background :
    bg.style.background = "url('https://raw.githubusercontent.com/danyweis/pics4codepen/master/weather/bg/11nThunderstorm.jpg')no-repeat center";

    bg.style.backgroundSize = "cover";

    // icon :
    icon.src = "https://raw.githubusercontent.com/danyweis/pics4codepen/master/weather/icon/11thunderstorm.png";

  }

else if (imgs === "13d") {// snow day

    // background :
    bg.style.background = "url('https://raw.githubusercontent.com/danyweis/pics4codepen/master/weather/bg/13dSnow.jpg')no-repeat center";

    bg.style.backgroundSize = "cover";

    // icon :
    icon.src = "https://raw.githubusercontent.com/danyweis/pics4codepen/master/weather/icon/13-snow.png";


  } else if (imgs === "13n") {// snow night

    // background :
    bg.style.background = "url('https://raw.githubusercontent.com/danyweis/pics4codepen/master/weather/bg/13nSnow.jpg')no-repeat center";

    bg.style.backgroundSize = "cover";

    // icon :
    icon.src = "https://raw.githubusercontent.com/danyweis/pics4codepen/master/weather/icon/13-snow.png";

  }

 else if (imgs === "50d") {// mist day

    // background :
    bg.style.background = "url('https://raw.githubusercontent.com/danyweis/pics4codepen/master/weather/bg/50dMist.jpg')no-repeat center";

    bg.style.backgroundSize = "cover";

    // icon :
    icon.src = "https://raw.githubusercontent.com/danyweis/pics4codepen/master/weather/icon/50sun-fog.png";

  }
    else if (imgs === "50n") {// mist night

    // background :
    bg.style.background = "url('https://raw.githubusercontent.com/danyweis/pics4codepen/master/weather/bg/50nMist.jpg')no-repeat center";

    bg.style.backgroundSize = "cover";

    // icon :
    icon.src = "https://raw.githubusercontent.com/danyweis/pics4codepen/master/weather/icon/50moon-fog.png";

  } ;
  } ;

//********************* get the time **********************/

var getTime = setInterval(theTime, 1000);
function theTime(){
  var d = new Date();

  var time = d.toLocaleTimeString();
  document.getElementById('time').innerHTML = time;
};
theTime();

//********************* change from C to F **********************//

function changeTemp() {
  var idName = document.getElementById('btnTemp');
  var temper = document.getElementById('temp');
  var windS = document.getElementById('windSpeed');
  var speed = document.getElementById('speed');
  if(idName.innerHTML === "C") {
    // Temperature
    idName.innerHTML = "F";
    temper.innerHTML = Math.round(Number(temper.innerHTML) * 9/5 + 32);

    // Windspeed
    speed.innerHTML = "mph";
    windS.innerHTML = Number(windS.innerHTML) * 2.27;

  } else {
    idName.innerHTML = "C";
    temper.innerHTML = Math.round((Number(temper.innerHTML) - 32) * 5/9);

    // Windspeed
    speed.innerHTML = "m/sec";
    windS.innerHTML = Number(windS.innerHTML) / 2.27;
  };
};
