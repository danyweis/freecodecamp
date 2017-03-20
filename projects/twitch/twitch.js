var arrChannelElt = ["medrybw", "OgamingSC2", "cretetion", "freecodecamp", "habathcx", "RobotCaleb", "noobs2ninjas"]
for (var i = 0; i < arrChannelElt.length; i++) {
    //console.log(arrChannelElt[i]);
    var channelName = arrChannelElt[i];
    var request = new XMLHttpRequest();
    request.open('GET', 'https://wind-bow.glitch.me/twitch-api/channels/' + channelName, true); //users streams
    request.onload = function() {
        if (this.status >= 200 && this.status < 400) {
            var data = JSON.parse(this.responseText);


            var responseBoxElt = document.createElement("div");
            responseBoxElt.style.height = "100px";
            responseBoxElt.style.marginTop = "10px";

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
            responseChannelElt.setAttribute("target", "_blank");
            //var responseTitleElt = document.createElement("p");
            //responseTitleElt.textContent = data.status;

            responseNameElt.appendChild(responseChannelElt);
            responseBoxElt.appendChild(responseImgElt);
            responseBoxElt.appendChild(responseNameElt);

            /*
                        var requestStream = new XMLHttpRequest();
                        requestStream.open('GET', 'https://wind-bow.glitch.me/twitch-api/streams/' + channelName, true);
                        var test = JSON.parse(this.responseText);
                        if (test.stream == null) {
                            responseBoxElt.style.backgroundColor = "red";
                        } else {
                            responseBoxElt.style.backgroundColor = "green";
                            var responseTitleElt = document.createElement("p");
                            responseTitleElt.textContent = data.status;
                            responseBoxElt.appendChild(responseTitleElt);
                        }

                        console.log(test);



            */





            document.getElementById("contenu").appendChild(responseBoxElt);


        } else {
            // ERROR
        }
    };
    request.send();
    channelName = "";
}