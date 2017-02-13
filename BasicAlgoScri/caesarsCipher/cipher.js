
// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

function rot13 (str) {
  var arrNumbers = []; // ici je stock les numeros
  var arrABC = []; // ici je stocke les numeros transformer

  var stock = ""; // ici je vais travailler sur les characteres
  var resultat = ""; // ici je mets le resultat (pas necesaire possible just aves str)

  for ( var i = 0; i < str.length; i++){
    // je passe charactere un apres l'autre de str
    stock = "";
    // securite pour que mon stock est toujours vide au debut de chaque boucle
    stock = str.charCodeAt(i);
    // je donne a stock le numero du characteres
    if (stock < 65 || stock > 90){
      // entre 65 et 90 se trouve l'ABC A = 65 & Z = 90
      stock = stock;
      // stock reste stock comme ca je change pas les signes et chiffres
    } else {
      stock = stock - 13;
      // si c'est entre 65 & 90 fais moins 13
      if (stock < 65){
        // si il tombe sous 65
        stock = str.charCodeAt(i) + 13;
        // je prend le chiffre initiale et j'ajoute 13
      }
    }

    arrNumbers.push(stock);
    // a la fin de chaque boucle je push le numero dans l'array
  }

  for ( var j = 0; j < arrNumbers.length; j++){
    // je passe chaque valeur de l'array en boucle
    stock = "";
    // securite pour que mon stock est toujours vide au debut de chaque boucle
    stock = String.fromCharCode(arr[j]);
    // avec String.fromCharCode() je transforme les numeros de nouveau en alphabet
    arrABC.push(stock);
    // je push le resultat de la transformation dans une Array arrABC
    resultat = arrABC.join("");
    // je crée un nouveau string avec tout les élément de l'array
  }
  return resultat;
}

rot13("LBH QVQ VG!"); // affiche : YOU DID IT!
rot13("SERR PBQR PNZC"); // affiche : FREE CODE CAMP
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.");
// affiche : THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX.
