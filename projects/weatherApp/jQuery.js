 $(document).ready(function() {

var latitude;
var longitude;
var urlStart = "api.openweathermap.org/data/2.5/weather?lat=";
var key = "&APPI=88ed677935f66ca8ba614806bb5b6618";
var longi = "&lon=";
// is depend on location
var fahrenheir = "&units=imperial";
var celsius = "&units=metric";
var url;

   if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(function(position){
         latitude = position.coords.latitude ;
         longitude = position.coords.longitude;
         // now we have the positions
         console.log(latitude + ', ' + longitude);

         // create the url

         url = urlStart + latitude + longi + longitude + celsius + key;

         console.log(url);

         $.getJSON(url, function(json){
             $(".message").html(json);
           });
       });

     }

    /*
*/



  });
