var arrChannelElt = ["thisOneDoesNotExist", "medrybw", "cretetion", "freecodecamp", "habathcx", "RobotCaleb", "noobs2ninjas"];

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


// CALL ONE BY ONE 
function users() {
    for (i = 0; i < arrChannelElt.length; i++) {
        var channelName = arrChannelElt[i];

        // CALL ALL THE CHANNELS
        ajaxGet("https://wind-bow.glitch.me/twitch-api/users/" + channelName, function (channelUser) {
            var player = JSON.parse(channelUser);
            var responseBoxElt = document.createElement("div");
            responseBoxElt.style.height = "100px";
            responseBoxElt.style.marginTop = "10px";
            responseBoxElt.style.padding = "10px 0 0 10px";
            responseBoxElt.style.borderRadius = "15px";

            var responseImgElt = document.createElement("img");
            responseImgElt.style.height = "75px";
            responseImgElt.style.marginRight = "10px";
            responseImgElt.style.borderRadius = "50%";
            responseImgElt.style.float = "left";

            var responseNameElt = document.createElement("h4");
            var responseChannelElt = document.createElement("a");
            responseChannelElt.style.textDecoration = "none";
            responseChannelElt.target = "_blank";
            responseChannelElt.style.color = "#4E2D92";
            responseChannelElt.href = "https://www.twitch.tv/" + player.display_name;

            var responseStatusElt = document.createElement("p");
            responseStatusElt.style.color = "#4E2D92";



            // CALL ALL THE STREAMS
            ajaxGet("https://wind-bow.glitch.me/twitch-api/streams/" + player.display_name, function (channelStreams) {
                var streamer = JSON.parse(channelStreams);
                // IF WRONG NAME OR CHANNEL DOESN'T EXIST ANY MORE
                if (player.status === 404) {
                    responseChannelElt.textContent = "Ooops! " + player.message;
                    responseChannelElt.style.color = "#fff";
                    responseChannelElt.href = "#"
                    responseChannelElt.target = "";
                    responseChannelElt.classList = "error"
                    responseBoxElt.style.backgroundColor = "gray";
                    responseBoxElt.style.border = "2px solid black";
                    responseImgElt.src = "https://raw.githubusercontent.com/danyweis/pics4codepen/master/twitch/404.png";

                    // IF OFFLINE 
                } else if (streamer.stream === null) {
                    responseChannelElt.textContent = player.display_name;
                    responseChannelElt.classList = "offline"
                    responseImgElt.src = player.logo;
                    responseBoxElt.style.backgroundColor = "rgba(191,42,35,0.5)";
                    responseBoxElt.style.border = "2px solid rgb(191,42,35)";

                    // IF ONLINE
                } else {
                    responseChannelElt.textContent = streamer.stream.channel.display_name;
                    responseChannelElt.classList = "online"
                    responseImgElt.src = streamer.stream.channel.logo;
                    responseBoxElt.style.backgroundColor = "rgba(166,173,60,0.5)";
                    responseBoxElt.style.border = "2px solid rgb(166,173,60)";
                    responseStatusElt.textContent = streamer.stream.channel.status;
                }
                responseNameElt.appendChild(responseChannelElt);
                responseBoxElt.appendChild(responseImgElt);
                responseBoxElt.appendChild(responseNameElt);

                responseBoxElt.appendChild(responseStatusElt);
                document.getElementById("contenu").appendChild(responseBoxElt);
            });

        });


    }
}
users();
document.getElementById("all").addEventListener("click", function () {
    document.getElementById("contenu").innerHTML = "";
    users();
});

document.getElementById("online").addEventListener("click", function () {
    document.getElementById("contenu").innerHTML = "";
    users();
    // if () {
    //   consloe.log("offline")
    //}
});

document.getElementById("offline").addEventListener("click", function () {

});
