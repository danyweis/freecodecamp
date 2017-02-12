
// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups (arr, size) {
  var newArr = []; // je crée une nouvel Array ou stocker le résultat
  var help = 0; // je crée une valeur 0 pour pouvoire push les bon resultats
  for (var i = 0; i < arr.length / size; i++){ // je divise l'arr par size sinon il m'envoie des array vides

  newArr.push(arr.slice(help, help + size)); // je push help jusqu'a help + size
  help = help + size; // j'augement help de size pour la prochaine boucle

  }
  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
