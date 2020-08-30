var wikiIt = '<div id="title">' + '<h1 id="theTitle">'+ 'Wiki it...!'+ '</h1>'+ '</div>'+ '<div id="globe">'+ '<img id="wikiGlobe" src="https://raw.githubusercontent.com/danyweis/pics4codepen/master/Wiki/wikilogo.png" alt="" />' + '</div>';

document.getElementById("content").innerHTML = wikiIt;

// send result with the enter key (13)
function keyPress (event){
  var code = event.which || event.keyCode;
if (code == 13){
  inputText();
};
};

// run this function when press de search button
function inputText(){
  // do the content box empty  
  
  var search = document.getElementById("textBox").value;
  console.log(search);
    if (search === ""){
      
    } else {
      
$.ajax( {
 
    url: 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=' + search + '&prop=info&inprop=url',
    dataType: 'jsonp',
    type: 'GET',
    success: function(data) {
      // console.log(data[1]); // header
      // console.log(data[2]); // text
      // console.log(data[3]); // href
      useData(data);
    }
} );
    }
};


// I creat the content boxes
function useData (theData) {

  document.getElementById("content").innerHTML = "";
  for (var i = 0; i < theData[1].length; i++){
    var linkBox = document.createElement("a");
    linkBox.setAttribute("class", "wikiArticle");
    linkBox.setAttribute("target", "_blank");
    linkBox.href = theData[3][i];
    var linkTitle = document.createElement("h2");
    linkTitle.textContent = theData[1][i];
    var linkText = document.createElement("p");
    linkText.textContent = theData[2][i];
    linkBox.appendChild(linkTitle);
    linkBox.appendChild(linkText);
    sendText(linkBox);
    
  };
 
};

// I send the boxes in the content ID and creat the close button
function sendText(theBox) { 
   
  document.getElementById("content").appendChild(theBox); 
  document.getElementById("closeBTN").style.display = "block";
   
};

// put the beginning screen back
function closeSearch() {
  document.getElementById("content").innerHTML = wikiIt;
  document.getElementById("closeBTN").style.display = "none";
}