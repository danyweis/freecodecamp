
// Check if a string (first argument, str) ends with the given target string (second argument, target).

// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

function confirmEnding (str, target) {
  var targetLength = target.length; // prend la langeur de target
  var stringLength = str.length; // prend la langeur de str
  var total = stringLength - targetLength; // je calcule ce qui ne correspond pas a target
  var result = str.substr(total);
  if (result === target){
    return true;
  } else {
    return false;
  }
}

confirmEnding("Bastian", "n"); // ==> true
confirmEnding("He has to give me a new name", "name"); // ==> true
confirmEnding("Open sesame", "pen"); // ==> false
