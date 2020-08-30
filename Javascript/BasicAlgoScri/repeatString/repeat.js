
// Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.

function repeatSrtingNumTimes (str, num) {
  var arr = [];
  if (num > 0){ // si num est plus grand que 0
    for (var i = 0; i < num; i++) {
      arr.push(str); // par boucle je push str dans l'array
    }
    str = arr.join(""); // je recrée le string de l'arr

  } else {
    str = ""; // sinon le string est rien
  }
  return str;
}

repeatSrtingNumTimes("abc", 3);
