
// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

function getIndexToIns (arr, num){

// je dois crée une fonction qui fait que les numero seront bien dans l'ordre sinon par ex [2, 1, 10, 20] serait [1, 10, 2, 20] et non [1, 2, 10, 20]

  function compareNumbers (a, b) {
    return a-b;
  }

  var count = "";
  // prend la position
  arr.push(num);
  // je push num dans arr

  arr.sort(compareNumbers);
  // je les mets dans le bon ordre

  count = arr.indexOf(num);
  // indexOf me donne la position de num dans arr

  return count;
}

getIndexToIns([40,60],50); // affiche 1
getIndexToIns([2, 5, 10], 15); // affiche 3
