// Reverse the provided string.

// You may need to turn the string into an array before you can reverse it.

// Your result must be a string.

function reverseString(str) {

  var arr = []; // je dois créer une Array vide pour stocker le str

  var arr2 = []; // je crée une 2ième Array pour la transformation

  arr = str.split(''); // je met le string en petit morceux lettre par lettre et je l'envoie dans mon Array

  arr2 = arr.reverse(); // j'envoie arr dans arr2 dans le sens inverse

  str = arr2.join(''); // je fais de arr2 de nouveau un string que je met dans la variable str

   console.log(str); // affiche olleh

  return str;  // affiche olleh

}

reverseString("hello")
