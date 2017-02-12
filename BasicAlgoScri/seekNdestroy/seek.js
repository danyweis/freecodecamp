
// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

// Je pense il existe un autre chemin mais celui ci a fonctioné

function destroyer (arr) {
  var arrayAllArguments = Array.from(arguments); // avec Array.from(arguments) je prend tout les arguments qui sont dans le fonction et je fais une array avec.
  var newArray = arrayAllArguments[0]; // je mets la premiere Array dans une autre Array pour pouvoir la travailler
  var argumentArray = [];
  var resultatArray = [];

// Je vais crée une Array avec les arguments autre que la premiere Array

for ( var i = 1; i < arrayAllArguments.length; i++){
  argumentArray.push(arrayAllArguments[i]); // je mets les autre arguments avec la boucle un après l'autre dans argumentArray
}

 // je crée une boucle qui passe tout les valeurs de newArray pour les comparer
for ( var j = 0; j < newArray.length; j++){

    // si le newArray[j] n'est pas dans argumentArray alors push le dans resultatArray
   if (argumentArray.indexOf(newArray[j]) === -1){
     resultatArray.push(newArray[j]);
   }
}

}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
