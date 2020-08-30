var arrChannelElt = ["medrybw", "cretetion", "freecodecamp", "habathcx", "RobotCaleb", "noobs2ninjas"]; //, "OgamingSC2"
var arrCree = [];
var arrOn = [];
var arrOff = [];

// var channelName = arrChannelElt[i];
// https://wind-bow.glitch.me/twitch-api/users/' + channelName
// var streamName = arrChannelElt[j];
// https://wind-bow.glitch.me/twitch-api/streams/' + streamName

function ajaxGet(url, callback) {
    var req = new XMLHttpRequest();
    req.open("GET", url);
    req.addEventListener("load", function() {
        if (req.status >= 200 && req.status < 400) {
            callback(req.responseText);
        } else {
            console.error(req.status + " " + req.statusText + " " + url);
        }
    });
    req.addEventListener("error", function() {
        console.error("Error with the URL " + url);
    });
    req.send(null);

}
//var test = "";
for (i = 0; i < arrChannelElt.length; i++) {
    var channelName = arrChannelElt[i];
    ajaxGet("https://wind-bow.glitch.me/twitch-api/users/" + channelName, function(channelUser) {
        var player = JSON.parse(channelUser);
        //console.log(player);
        //return player;
    });
    ajaxGet("https://wind-bow.glitch.me/twitch-api/streams/" + channelName, function(channelStreams) {
        var streamer = JSON.parse(channelStreams);
        //console.log(streamer);
        return streamer;
    });
    //console.log(streamer);
    //console.log(player);
    createApp();

}



//console.log(arrCree[1]);

function createApp(player, steamer) {
    console.log(player);
    var responseBoxElt = document.createElement("div");
    responseBoxElt.style.height = "100px";
    responseBoxElt.style.marginTop = "10px";
    responseBoxElt.style.padding = "10px 0 0 10px";
    responseBoxElt.style.border = "1px solid #381975";

    var responseImgElt = document.createElement("img");
    responseImgElt.setAttribute("src", player);
    responseImgElt.style.height = "75px";
    responseImgElt.style.marginRight = "10px";
    responseImgElt.style.borderRadius = "50%";
    responseImgElt.style.float = "left";
    var responseNameElt = document.createElement("h4");
    var responseChannelElt = document.createElement("a");
    //responseChannelElt.textContent = channelUser[i].display_name;
    //responseChannelElt.href = channelUser[i].url;
    responseChannelElt.style.textDecoration = "none";
    responseChannelElt.style.color = "#fff";
    responseChannelElt.setAttribute("target", "_blank");


    responseNameElt.appendChild(responseChannelElt);
    responseBoxElt.appendChild(responseImgElt);
    responseBoxElt.appendChild(responseNameElt);

    document.getElementById("contenu").appendChild(responseBoxElt);

}
/*
    console.log(arrCree);
    //console.log(arrOn);


    for (x = 0; x < arrCree.length; x++) {

        console.log("test")


        var responseBoxElt = document.createElement("div");
        responseBoxElt.style.height = "100px";
        responseBoxElt.style.marginTop = "10px";
        responseBoxElt.style.padding = "10px 0 0 10px";
        responseBoxElt.style.border = "1px solid #381975";

        var responseImgElt = document.createElement("img");
        responseImgElt.setAttribute("src", arrCree.logo);
        responseImgElt.style.height = "75px";
        responseImgElt.style.marginRight = "10px";
        responseImgElt.style.borderRadius = "50%";
        responseImgElt.style.float = "left";
        var responseNameElt = document.createElement("h4");
        var responseChannelElt = document.createElement("a");
        responseChannelElt.textContent = arrCree[x].display_name;
        responseChannelElt.href = arrCree.url;
        responseChannelElt.style.textDecoration = "none";
        responseChannelElt.style.color = "#fff";
        responseChannelElt.setAttribute("target", "_blank");


        responseNameElt.appendChild(responseChannelElt);
        responseBoxElt.appendChild(responseImgElt);
        responseBoxElt.appendChild(responseNameElt);

        document.getElementById("contenu").appendChild(responseBoxElt);
    }









}


/*
document.getElementById("all").addEventListener("click", function() {
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