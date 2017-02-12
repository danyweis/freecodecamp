function mutation (arr) {
  var str1 = arr[0].toLowerCase();
  var str2 = arr[1].toLowerCase();
  // je crée deux string en minuscul
  var count = ""; // je crée un compteur de faute
  var i = 0; // un compteur de tours

  while ( (count !== -1) && i < str2.length ) {
    // temps que count ne devient pas un charactere qui n'est pas present count ne devient pas -1 donc la boucle continue temps que la taille de str2 est atteint
    conut = (str1.indexOf(str2[i]));
    // si .indexOf tombe sur un charactere qui n'est pas present il renvoie la valeur -1
    i++;

  }
  if (count === -1) { // si on tombe sur un charactere non present la boucle est interompu et on envoie un false
    return false;
  } else {
    return true;
  }
}

mutation (["hello", "hey"]); // affiche false cause du "y" dans hey
mutation (["Alien", "line"]); // affiche true comme toutes les lettres de line sint présent dans Alien
