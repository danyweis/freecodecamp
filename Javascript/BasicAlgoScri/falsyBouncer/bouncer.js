function bouncer (arr) {
  var newArr = []; // je crée une nouvelle Array dans la quelle je mets chaque valeur qui passe mon filtre

  newArr = arr.filter(Boolean); // j'envoie tout qui est boolean dans newArr
  // pas boolean  ==> "" NaN undefined 0 -1 null false
  return newArr;

}

bouncer([7, "ate", "", false, 9, 0, -14, "a", NaN]); // affiche ==> [7, "ate", 9, "a"]
bouncer([false, null, 0, NaN, undefined, ""]); //affiche ==> []
