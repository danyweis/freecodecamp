function phoneticLookup(val){
  var result = '';  // le resultat et ce que l on retourn

// Il faut creer une table ICI lookup
  var lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank"
  };

// ici je cree une variable a laquel je donne la valeur de la VAL
var look = val;

// ici je donne une valeur a result
// cette valeur va dans la table LOOKUP et cherche
// pour trouver la valeur qui est stocker dans LOOK
result = lookup[look];


}
