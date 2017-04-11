var arrChannelElt = ["thisOneDoesNotExist", "medrybw", "cretetion", "freecodecamp", "habathcx", "noobs2ninjas"];

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
            var responseViewElt = document.createElement("span");
            responseChannelElt.style.textDecoration = "none";
            responseChannelElt.target = "_blank";
            responseChannelElt.style.color = "#222";
            responseChannelElt.href = "https://www.twitch.tv/" + player.display_name;
            responseViewElt.style.color = "#222";

            var responseStatusElt = document.createElement("p");
            responseStatusElt.style.color = "#222";

            // CALL ALL THE STREAMS
            ajaxGet("https://wind-bow.glitch.me/twitch-api/streams/" + player.display_name, function (channelStreams) {
                var streamer = JSON.parse(channelStreams);
                // IF WRONG NAME OR CHANNEL DOESN'T EXIST ANY MORE
                if (player.status >= 400 || player.status < 500) {
                    responseChannelElt.textContent = "Ooops! " + player.message;
                    responseChannelElt.style.color = "#fff";
                    responseChannelElt.href = "#"
                    responseChannelElt.target = "";
                    responseBoxElt.classList = "error";
                    responseBoxElt.style.backgroundColor = "rgba(15,15,15,0.9)";
                    responseBoxElt.style.border = "2px solid black";
                    responseImgElt.src = "https://raw.githubusercontent.com/danyweis/pics4codepen/master/twitch/404.png";

                    // IF OFFLINE 
                } else if (streamer.stream === null) {
                    responseChannelElt.textContent = player.display_name;
                    responseBoxElt.classList = "offStream"
                    responseBoxElt.style.backgroundColor = "rgba(191,42,35,0.9)";
                    responseBoxElt.style.border = "2px solid rgb(191,42,35)";

                    // IF CHANNEL HAS NO LOGO 
                    if (player.logo === null) {
                        responseImgElt.src = "https://raw.githubusercontent.com/danyweis/pics4codepen/master/twitch/noImage.png";
                    } else {
                        responseImgElt.src = player.logo;
                    }

                    // IF ONLINE
                } else {
                    responseChannelElt.textContent = streamer.stream.channel.display_name
                    responseBoxElt.classList = "onStream";
                    responseBoxElt.style.backgroundColor = "rgba(173,189,6,0.9)";
                    responseBoxElt.style.border = "2px solid rgb(166,173,60)";
                    responseStatusElt.textContent = streamer.stream.channel.status;
                    responseViewElt.textContent = " (Viewers: " + streamer.stream.viewers + ")";

                    // IF CHANNEL HAS NO LOGO 
                    if (streamer.stream.channel.logo === null) {
                        responseImgElt.src = "https://raw.githubusercontent.com/danyweis/pics4codepen/master/twitch/noImage.png";
                    } else {
                        responseImgElt.src = streamer.stream.channel.logo;
                    }
                }

                responseNameElt.appendChild(responseChannelElt);
                responseNameElt.appendChild(responseViewElt);
                responseBoxElt.appendChild(responseImgElt);
                responseBoxElt.appendChild(responseNameElt);
                responseBoxElt.appendChild(responseStatusElt);
                document.getElementById("contenu").appendChild(responseBoxElt);
            });
        });
    }
}
// LOAD THE FUNCTION USERS IN THE ONE I CALL THE API DATA
users();



// CLICK "ALL" ALL DIVS ARE DISPLAY BLOCK
document.getElementById("all").addEventListener("click", function () {
    var notOnLine = document.getElementsByClassName("offStream");
    for (var i = 0; i < notOnLine.length; i++) {
        notOnLine[i].style.display = "block";
    }
    var uneErreur = document.getElementsByClassName("error");
    for (var i = 0; i < uneErreur.length; i++) {
        uneErreur[i].style.display = "block";
    }
    var onLine = document.getElementsByClassName("onStream");
    for (var i = 0; i < onLine.length; i++) {
        onLine[i].style.display = "block";
    }
});

// CLICK "ONLINE" ONLY DIVS .onStream ARE DISPLAY BLOCK 
document.getElementById("online").addEventListener("click", function () {
    var notOnLine = document.getElementsByClassName("offStream");
    for (var i = 0; i < notOnLine.length; i++) {
        notOnLine[i].style.display = "none";
    }
    var uneErreur = document.getElementsByClassName("error");
    for (var i = 0; i < uneErreur.length; i++) {
        uneErreur[i].style.display = "none";
    }
    var onLine = document.getElementsByClassName("onStream");
    for (var i = 0; i < onLine.length; i++) {
        onLine[i].style.display = "block";
    }
});

// CLICK "OFFLINE" ONLY DIVS .offStream ARE DISPLAY BLOCK 
document.getElementById("offline").addEventListener("click", function () {
    var notOnLine = document.getElementsByClassName("offStream");
    for (var i = 0; i < notOnLine.length; i++) {
        notOnLine[i].style.display = "block";
    }
    var onLine = document.getElementsByClassName("onStream");
    for (var i = 0; i < onLine.length; i++) {
        onLine[i].style.display = "none";
    }
    var uneErreur = document.getElementsByClassName("error");
    for (var i = 0; i < uneErreur.length; i++) {
        uneErreur[i].style.display = "none";
    }
});

// REFRESH THE CHANNELS IF SOMETHING CHANGED IN THE TIME THE APP IS OPEN
document.getElementById("refreshBtn").addEventListener("click", function () {
    document.getElementById("contenu").innerHTML = "";
    users();
});

// SEARCH FOR A NEW CHANNEL AND PUSH THE CHANNEL IN THE ARRAY

document.getElementById("searchBtn").addEventListener("click", function () {
    var newChannel = document.getElementById("searchBox").value;
    console.log(newChannel);
    if (newChannel === "") {
        // IF NOTTHIN IN THE SEARCHBOX DO NOTHING
    } else {
        arrChannelElt.push(newChannel);
        document.getElementById("searchBox").value = "";
        document.getElementById("contenu").innerHTML = "";
        users();
    }
});
