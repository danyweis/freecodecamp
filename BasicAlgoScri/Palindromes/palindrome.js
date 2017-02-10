
// Return true if the given string is a palindrome. Otherwise, return false.

// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

// Note
// You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.

// We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

// We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".

function palindrome(str) {
  var string = str.toLowerCase(); // je fais que str est tout en minuscule

  var strNormal = string.replace(/[^A-Za-z0-9]/g,"");
  /* ici je crée une variable ou je veux que de l'alphabe dedans,
  avec .replace() je peux remplacer tout et la mettre dans ma variable
  strNormal. Je mets entre /[...]/ ce que je cherche pour remplacer.
  Avec ^ je lui dis de remlacer tout sauf ce qui suit
  et ci je ne mets pas ^ il remlace tout ce qui suit.
  Avec le "g" je lui dit de continuer jusque la fin et de ne pas
  s'arreter dés qu'il a trouver le premier charactère qui correspand
  à ce que je cherche a remplacer.
  puis apres le " , " le lui dit par quoi le characrtère remplacer
  dans ce cas je lui dit par rien avec "" */

  var arr = []; // je crée une Array pour stocker mon strNormal

  var palindrome = ""; // pour lui donner le strNormal en renverser

  for(var i = strNormal.length -1; i>= 0; i--){ // le strNormale i par i mais commence par dèrriere
    arr.push(strNormal[i]); // je les push un par un dans l'Array (à l'envers)
  }
  palindrome = arr.join(''); // je donne le contenu de arr à palindrome comme valeur

  // maintenant je teste si strNormale et parreille quepalindrome

  if(strNormal === palindrome) {
      console.log(true);
    return true;

  } else {

      console.log(false);
    return false;
  }

}

palindrome("e/><y.e"); // ==> true parceque  === eye
