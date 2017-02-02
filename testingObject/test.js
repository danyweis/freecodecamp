var myObj = {
  gift: 'poney',
  pet: 'kitten',
  bed: 'sleigh'
};

function checkObj(checkProp) {

  /* Je regarde si la propertie est present
  ou non ce qui me sort un true ou false*/

  myObj.hasOwnProperty(checkProp); // pas néssésaire

  /* comme je veux la réponse ou bien savoir
  si elle n'est pas presente du coup il faut
  faire un controlle avec IF */
  if (myObj.hasOwnProperty(checkProp) !== true){
    return "Not Found";
  } else {  // si elle est présente
    var look = checkProp; // je mets la propriete dans look
    var result = myObj[look]; // je prend l'interieur de la propriete
    return result;
  }
}

checkObj('pet');
