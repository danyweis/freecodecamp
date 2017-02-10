// Return the factorial of the provided integer.

// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

// Factorials are often represented with the shorthand notation n!

// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120



function factorialize(num) {
  var total = 1;
  for (var i = 1; i <= num; i++) {
    total = i * total;
  }
  num = total; // pas besoin si on fait un ==> return total; <==
  return num;
}



// Premiere SOLUTION trouver

function factorialize(num) {
  var total = 1; // je crée une var pour stocker le total de i
  var arr = []; // je crée une array pour stocker mes numeros

  for(var i = 1; i <= num; i++) { // i dois etre 1 sinon je commence avec 0

    total = i * total; // si j'aurais mis i ou total sur 0 le resultat aurait toujours été 0

    arr.push(total); // je .push() le total dans l'Array pour pouvoir
  }
  num = arr.pop(); // ici je sort le dernier et le met dans num
  if (num >= 1){
    return num;
  } else{
    num = 1;
    return num;
  }
}

factorialize(0);
