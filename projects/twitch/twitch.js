var arrChannelElt = ["medrybw", "cretetion", "freecodecamp", "habathcx", "RobotCaleb", "noobs2ninjas"];

// CALL THE API
function ajaxGet(url, callback) {
    var req = new XMLHttpRequest();
    req.open("GET", url);
    req.addEventListener("load", function () {
        if (req.status >= 200 && req.status < 400) {
            callback(req.responseText);
        } else {
            console.error(req.status + " " + req.statusText + " " + url);
        }
    });
    req.addEventListener("error", function () {
        console.error("Error with the URL " + url);
    });
    req.send(null);
}


var arrOffline = [];
var channelName = "";

// CALL ONE BY ONE 
for (i = 0; i < arrChannelElt.length; i++) {
    channelName = arrChannelElt[i];
    //console.log(channelName);

    /*
    ajaxGet("https://wind-bow.glitch.me/twitch-api/users/" + channelName, function (channelUser) {
        var player = JSON.parse(channelUser);

        var responseBoxElt = document.createElement("div");
        responseBoxElt.style.height = "100px";
        responseBoxElt.style.marginTop = "10px";
        responseBoxElt.style.padding = "10px 0 0 10px";
        responseBoxElt.style.border = "1px solid #381975";

        var responseImgElt = document.createElement("img");
        responseImgElt.style.height = "75px";
        responseImgElt.style.marginRight = "10px";
        responseImgElt.style.borderRadius = "50%";
        responseImgElt.style.float = "left";

        var responseNameElt = document.createElement("h4");
        var responseChannelElt = document.createElement("a");
        responseChannelElt.style.textDecoration = "none";
        responseChannelElt.style.color = "#fff";
        responseChannelElt.setAttribute("target", "_blank");

        responseChannelElt.textContent = player.display_name;
        responseChannelElt.href = player.url;
        responseImgElt.src = player.logo;

        responseNameElt.appendChild(responseChannelElt);
        responseBoxElt.appendChild(responseImgElt);
        responseBoxElt.appendChild(responseNameElt);
        document.getElementById("contenu").appendChild(responseBoxElt);


    });
*/
    // NOT WORK LIKE THIS DON'T KNOW WHY

    // CHECK IF ONLINE WITH STREAMS
    ajaxGet("https://wind-bow.glitch.me/twitch-api/streams/" + channelName, function (channelStreams) {
        var streamer = JSON.parse(channelStreams);
        if (streamer.stream !== null) {
            console.log(channelStreams);

            arrOffline.push(streamer.stream.channel.display_name);
            var responseBoxElt = document.createElement("div");
            responseBoxElt.style.height = "100px";
            responseBoxElt.style.marginTop = "10px";
            responseBoxElt.style.padding = "10px 0 0 10px";
            responseBoxElt.style.border = "1px solid #381975";

            var responseImgElt = document.createElement("img");
            responseImgElt.style.height = "75px";
            responseImgElt.style.marginRight = "10px";
            responseImgElt.style.borderRadius = "50%";
            responseImgElt.style.float = "left";

            var responseNameElt = document.createElement("h4");
            var responseChannelElt = document.createElement("a");

            responseChannelElt.style.textDecoration = "none";
            responseChannelElt.style.color = "#fff";
            responseChannelElt.setAttribute("target", "_blank");








            //responseChannelElt.textContent = streamer.stream.channel.display_name;
            //responseChannelElt.href = streamer.stream.channel.url;
            //responseImgElt.src = streamer.stream.channel.logo;

            // console.log(streamer.stream);
        }

        /*else {

                   // IF NOT ONLINE CALL USER

                   arrOffline.push(channelName);


               }
               responseNameElt.appendChild(responseChannelElt);
               responseBoxElt.appendChild(responseImgElt);
               responseBoxElt.appendChild(responseNameElt);
               document.getElementById("contenu").appendChild(responseBoxElt);*/
    });

    //console.log(channelName);
}



/*


 ajaxGet("https://wind-bow.glitch.me/twitch-api/users/" + channelName, function (channelUser) {


                var player = JSON.parse(channelUser);


                var responseBoxElt = document.createElement("div");
                responseBoxElt.style.height = "100px";
                responseBoxElt.style.marginTop = "10px";
                responseBoxElt.style.padding = "10px 0 0 10px";
                responseBoxElt.style.border = "1px solid #381975";

                var responseImgElt = document.createElement("img");
                responseImgElt.style.height = "75px";
                responseImgElt.style.marginRight = "10px";
                responseImgElt.style.borderRadius = "50%";
                responseImgElt.style.float = "left";

                var responseNameElt = document.createElement("h4");
                var responseChannelElt = document.createElement("a");

                responseChannelElt.style.textDecoration = "none";
                responseChannelElt.style.color = "#fff";
                responseChannelElt.setAttribute("target", "_blank");





                responseChannelElt.textContent = player.display_name;
                responseChannelElt.href = player.url;
                responseImgElt.src = player.logo;
            });



*/




/*
function createApp(player) {
    var responseBoxElt = document.createElement("div");
    responseBoxElt.style.height = "100px";
    responseBoxElt.style.marginTop = "10px";
    responseBoxElt.style.padding = "10px 0 0 10px";
    responseBoxElt.style.border = "1px solid #381975";

    var responseImgElt = document.createElement("img");
    responseImgElt.src = player.logo;
    responseImgElt.style.height = "75px";
    responseImgElt.style.marginRight = "10px";
    responseImgElt.style.borderRadius = "50%";
    responseImgElt.style.float = "left";
    
    var responseNameElt = document.createElement("h4");
    var responseChannelElt = document.createElement("a");
    responseChannelElt.textContent = player.display_name;
    responseChannelElt.href = player.url;
    responseChannelElt.style.textDecoration = "none";
    responseChannelElt.style.color = "#fff";
    responseChannelElt.setAttribute("target", "_blank");


    responseNameElt.appendChild(responseChannelElt);
    responseBoxElt.appendChild(responseImgElt);
    responseBoxElt.appendChild(responseNameElt);

    document.getElementById("contenu").appendChild(responseBoxElt);

}
*/


/*
 ajaxGet("https://wind-bow.glitch.me/twitch-api/streams/" + channelName, function (channelStreams) {
        var streamer = JSON.parse(channelStreams);
        if (streamer.stream === null) {

        } else {

            //var test = "";
            //test = streamer.stream.channel.display_name;
            arrOn.push(test);
            //createApp(streamer);
        }


    });

*/








/* document.getElementById("all").addEventListener("click", function() {
    all();
});

document.getElementById("online").addEventListener("click", function() {
    online();
});

//console.log(arrCree);

document.getElementById("offline").addEventListener("click", function() {
    document.getElementById("contenu").innerHTML = "";
    arrOff = [];
*/
