// Convert a string to spinal case.
// Spinal case is all-lowercase-words-joined-by-dashes.

// spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
// spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
// spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
// spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".
// spinalCase("AllThe-small Things") should return "all-the-small-things".


// MY CODE 

function spinalCase(str) {

    let result = str.split(/\W/)        // SPLIT THE STRING TO ARRAY IN WITH SPACING SPECIAL CHARACTERS
        .map(a => a.charAt(0)           // GO OVER EACH ITEMS FIRST CHARACTER IN ARRAY 
            .toUpperCase() + a.slice(1))// PUT TO UPPERCASE AND ADD THE RESR WITH SLICE
        .join('')                       // PUT ALL TOGETHER TO NEW STRING
        .match(/[A-Z][a-z]+/g)          // DO NEW ARRAY WITH EACH WORD STARTING WITH UPPERCASE TILL NEXT UPPERCASE
        .join('-')                      // PUT IT BACK TO STRING JOINT WITH -
    .toLowerCase()                      // PUT ALL TO LOWERCASE

console.log(result);

    return result

}

 spinalCase("This Is Spinal Tap") 
 spinalCase("thisIsSpinalTap") 
 spinalCase("The_Andy_Griffith_Show") 
 spinalCase("Teletubbies say Eh-oh") 
 spinalCase("AllThe-small Things") 
