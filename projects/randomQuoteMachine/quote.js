var theQuotes = [["Be yourself; everyone else is already taken.", "- Oscar Wilde"],["Two things are infinite: the universe and the human stupidity; and I'm not sure about the universe.", "- Albert Einstein"],["Be the change that you wish to see in the world.", "- Mahatma Gandhi"],["In three words i can sum up everything I've learned about life: it goes on.", "- Robert Frost"],["If you tell the truth, you don't have to remember anything.", "- Mark Twain"],["Life is what happens to us while we are making other plans.", "- Allen Saunders"],["I have not failed. I've just found 10.000 ways that won't work.", "- Thomas A. Edison"],["Love all, trust a few, do wrong to none.", "- William Shakespeare"],["That which does not kill us makes us stronger.", "- Friedrich Nietzsche"],["If you judge poeple, you have no time to love them.", "- Mother Teresa"],["If you can't explain it to a six year old, you don't understand it yourself.", "- Albert Einstein"]];

var autor = "";
var quoteText = "";
var randomValue = "";

function newQuote (){
  randomValue = theQuotes[Math.floor(Math.random() * theQuotes.length)];
  quoteText = randomValue[0];
  autor = randomValue[1];
  //console.log(theQuotes);


  document.getElementById("quoteText").innerHTML = quoteText;
  document.getElementById("quoteAutor").innerHTML = autor;

};
