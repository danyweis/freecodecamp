
// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

function largestOfFour (arr) {
  var arrLargest = []; // une array dans laquelle je mets les plus grandes numeros
  var bigest = 0; // une variable qui va avoir la plus grande des l'arrays

  for (var i = 0; i < arr.length; i++) { // je tourne dans l'array principale
  for (var j = 0; j < arr[i].length; j++) { // je tourne dans les sous arrays
    if (arr[i][j] > bigest) { // si le numero passer on parametre est plus grand que bigest
      bigest = arr[i][j]; // bigest devient ce numero
    }
  }
  arrLargest.push(bigest); //je mets le plus grand numero dans mon array
  bigest = 0; // je remets bigest a 0 sinon il reste la taille du plus grand de la derniere array
  }
  return arrLargest;
}

largestOfFour([[13, 27, 18, 26], [4, 5, 3, 1], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
