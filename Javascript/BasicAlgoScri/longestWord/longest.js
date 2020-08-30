
// Return the length of the longest word in the provided sentence.

// Your response should be a number.

function findLongestWord (str) {
  var arr = []; // Je crée une Array

  arr = (str.split(/\s/)); // je split le string dans les whitespaces et les stock dans l'array

  var string = 0; // dans ce string je stock la plus longue longeur

  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i].length); // pour tester la longeur de l'array

    if (arr[i].length > string) { // control la longeur des mots dans l'array
      string = arr[i].length; // si il est plus long que string alors remplace le par celle ci
    }
  }
  return string;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
