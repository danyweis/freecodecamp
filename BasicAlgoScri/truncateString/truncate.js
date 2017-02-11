
// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

// Note that inserting the three dots to the end will add to the string length.

// However, if the given maximum string length num is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string.

function truncateString (str, num) {
  var beginning = ""; // ici je stock le debut
  var end = "..."; // ici est la fin "..."
  var steLength = str.length; // ici je stock la longeur de str
  if (num <= 3) {
    beginning = str.slice(0, num); // slice(ou commencer a afficher , ou arreter);
    str = beginning + end;
  } else if (srtrLength > num) {
    beginning = str.slice(0, num - 3); // le 3 est pour les ==> "..."
    str = beginning + end;
  }
  return str;
}

truncateString("A-tisket a-tisket A green and yellow basket", 11);
