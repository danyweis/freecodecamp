var theQuotes = [["Be yourself everyone else is already taken.", " Oscar Wilde"],["Two things are infinite: the universe and the human stupidity and I'm not sure about the universe.", " Albert Einstein"],["Be the change that you wish to see in the world.", " Mahatma Gandhi"],["In three words i can sum up everything I've learned about life: it goes on.", " Robert Frost"],["If you tell the truth, you don't have to remember anything.", " Mark Twain"],["Life is what happens to us while we are making other plans.", " Allen Saunders"],["I have not failed. I've just found 10.000 ways that won't work.", " Thomas A. Edison"],["Love all, trust a few, do wrong to none.", " William Shakespeare"],["That which does not kill us makes us stronger.", " Friedrich Nietzsche"],["If you judge poeple, you have no time to love them.", " Mother Teresa"],["If you can't explain it to a six year old, you don't understand it yourself.", " Albert Einstein"], ["Don't try finding yourself, just start creating youself.", " Dany Weis"]];

var autor = "";
var quoteText = "";
var randomValue = "";




function newQuote (){

    randomValue = theQuotes[Math.floor(Math.random() * theQuotes.length)];

  quoteText = randomValue[0];
  autor = randomValue[1];
  //console.log(theQuotes);

 // Quote

document.getElementById("quoteText").innerHTML = quoteText;
document.getElementById("quoteAutor").innerHTML = autor;


 // Tweet
quoteText = document.getElementById("quoteText").innerHTML,
  linkElement = document.getElementById("tweetIt");
quoteAutor = document.getElementById("quoteAutor").innerHTML,
  linkElement = document.getElementById("tweetIt");




 // tweet event
$(linkElement).click(function(event){

  event.preventDefault();

  window.open("http://twitter.com/intent/tweet?url=" + "&text=" + '"' + quoteText + '"' + " " + quoteAutor + "&via=danyweisCode&", "twitterwindow", "height=450, width=550, toolbar=0, location=0, menubar=0, directories=0, scrollbars=0");

}); // tweet event finish

  // .quoteBox

};

onload = function() { newQuote(); }


$("#getQuote").on('click', function(){

   $('.quoteBox').fadeOut(10).delay(400).fadeIn(500);
 });
