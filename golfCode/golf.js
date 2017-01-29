
function golfScore(par, strokes) {
  // Only change code below this line
if((par >= 1) && (strokes === 1)){
    return "Hole-in-one!";
} else if(par === strokes){
    return "Par";
} else if((par - strokes) >= 2){
    return "Eagle";
} else if((par - strokes) === 1){
   return "Birdie";
} else if ((par - strokes) === -1){
  return "Bogey";
} else if ((par - strokes) === -2){
  return "Double Bogey";
} else{
  return "Go Home!";
}


  // Only change code above this line
}

// Change these values to test
golfScore(4, 6);
