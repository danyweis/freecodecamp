$(document).ready(function(){var o,t,e="api.openweathermap.org/data/2.5/weather?lat=",a="&APPI=88ed677935f66ca8ba614806bb5b6618",n="&lon=",i="&units=imperial",r="&units=metric",c;navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(i){o=i.coords.latitude,t=i.coords.longitude,console.log(o+", "+t),c=e+o+n+t+r+a,console.log(c),$.getJSON(c,function(o){$(".message").html(o)})})});