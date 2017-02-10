
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

function titleCase (str) {
  var string = str.toLowerCase(); // je fais le string tout petit
  var stringToUpper = ""; // ici je travail dedans
  var arr = [];
  var arrToUpper = [];

  arr = (string.split(/\s/)); // je mets mot par mot dans l'array

  for (var i = 0; i < arr.length; i++){

    string = arr[i]; // je mets le mot qui passe en parametre dans la variable string

    stringToUpper = srting[0].toUpperCase() + string.substr(1);
    // avec string[0].toUpperCase() je mets le premiercharactère en majuscule
    // avec srting.substr(1) je dis de ou commencer a afficher le string. comme le 1er charactère est afficher en maj je montre a partir de 1 (le 2eme charactère)
    arrToUpper.push(stringToUpper); // je push stringToUpper dans une autre array pour le sortir de la boucle
  }
  string = arrToUpper.join(" "); // je refais ma phrase avec des espace entre les mots
  return string;
}

titleCase("I'm a liTTel tEa poT"); // Affiche I'm A Littel Tea Pot
