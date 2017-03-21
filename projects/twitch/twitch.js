var arrChannelElt = ["medrybw", "OgamingSC2", "cretetion", "freecodecamp", "habathcx", "RobotCaleb", "noobs2ninjas"];
var arrCree = [];
var arrOn = [];

/*function all() {
    document.getElementById("contenu").innerHTML = "";

    for (var i = 0; i < arrChannelElt.length; i++) {
         var channelName = arrChannelElt[i];
         var request = new XMLHttpRequest();
         request.open('GET', 'https://wind-bow.glitch.me/twitch-api/channels/' + channelName, true); //users streams
         request.onload = function() {
             if (this.status >= 200 && this.status < 400) {
                 var data = JSON.parse(this.responseText);
     var responseBoxElt = document.createElement("div");
     responseBoxElt.style.height = "100px";
     responseBoxElt.style.marginTop = "10px";
     responseBoxElt.style.padding = "10px 0 0 10px";
     responseBoxElt.style.border = "1px solid #381975";

     var responseImgElt = document.createElement("img");
     responseImgElt.setAttribute("src", data.logo);
     responseImgElt.style.height = "75px";
     responseImgElt.style.marginRight = "10px";
     responseImgElt.style.borderRadius = "50%";
     responseImgElt.style.float = "left";
     var responseNameElt = document.createElement("h4");
     var responseChannelElt = document.createElement("a");
     responseChannelElt.textContent = data.display_name;
     responseChannelElt.href = data.url;
     responseChannelElt.style.textDecoration = "none";
     responseChannelElt.style.color = "#fff";
     responseChannelElt.setAttribute("target", "_blank");


     responseNameElt.appendChild(responseChannelElt);
     responseBoxElt.appendChild(responseImgElt);
     responseBoxElt.appendChild(responseNameElt);

     document.getElementById("contenu").appendChild(responseBoxElt);

     arrCree.push(data);
    } else {
    // ERROR
}
};
        request.send();
        channelName = "";
    }
}

all();*/

function online() {
    document.getElementById("contenu").innerHTML = "";
    for (var j = 0; j < arrChannelElt.length; j++) {
        var streamName = arrChannelElt[j];
        var requestStream = new XMLHttpRequest();
        requestStream.open('GET', 'https://wind-bow.glitch.me/twitch-api/streams/' + streamName, true);
        requestStream.onload = function() {
            var test = JSON.parse(this.responseText);
            if (test.stream !== null) {


                var responseTitleElt = document.createElement("p");
                responseTitleElt.textContent = test.stream.channel.status;


                var responseBoxElt = document.createElement("div");
                responseBoxElt.style.height = "100px";
                responseBoxElt.style.marginTop = "10px";
                responseBoxElt.style.padding = "10px 0 0 10px";
                responseBoxElt.style.border = "1px solid #381975";
                responseBoxElt.style.backgroundColor = "#55AA55";

                var responseImgElt = document.createElement("img");
                responseImgElt.setAttribute("src", test.stream.channel.logo);
                responseImgElt.style.height = "75px";
                responseImgElt.style.marginRight = "10px";
                responseImgElt.style.borderRadius = "50%";
                responseImgElt.style.float = "left";
                var responseNameElt = document.createElement("h4");
                var responseChannelElt = document.createElement("a");
                responseChannelElt.textContent = test.stream.channel.display_name;
                responseChannelElt.href = test.stream.channel.url;
                responseChannelElt.style.textDecoration = "none";
                responseChannelElt.style.color = "#fff";
                responseChannelElt.setAttribute("target", "_blank");


                responseNameElt.appendChild(responseChannelElt);
                responseBoxElt.appendChild(responseImgElt);
                responseBoxElt.appendChild(responseNameElt);
                responseBoxElt.appendChild(responseTitleElt);
                document.getElementById("contenu").appendChild(responseBoxElt);


            } else {
                //responseBoxElt.style.backgroundcolor = "#55AA55";
            }
        }
        requestStream.send();
        streamName = "";
    }
}



document.getElementById("all").addEventListener("click", function() {
    all();
});

document.getElementById("online").addEventListener("click", function() {
    online();
});

//console.log(arrCree);

document.getElementById("offline").addEventListener("click", function() {
    document.getElementById("contenu").innerHTML = "";
    for (var j = 0; j < arrChannelElt.length; j++) {
        var streamName = arrChannelElt[j];
        var requestStream = new XMLHttpRequest();
        requestStream.open('GET', 'https://wind-bow.glitch.me/twitch-api/streams/' + streamName, true);
        requestStream.onload = function() {
            var test = JSON.parse(this.responseText);
            arrOn.push(test);
        }
    }
    console.log(arrCree);
    console.log(arrOn);
});







function test() {
    for (var i = 0; i < arrChannelElt.length; i++) {
        var channelName = arrChannelElt[i];
        var request = new XMLHttpRequest();
        request.open('GET', 'https://wind-bow.glitch.me/twitch-api/channels/' + channelName, true); //users streams
        request.onload = function() {
            if (this.status >= 200 && this.status < 400) {
                var data = JSON.parse(this.responseText);
                arrCree.push(data);
            }
            request.send();
            channelName = "";
        }
    }
}
test();
console.log(arrCree);