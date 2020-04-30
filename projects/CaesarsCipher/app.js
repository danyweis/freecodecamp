// JavaScript Algorithms and Data Structures Projects: Caesars Cipher
// One of the simplest and most widely known ciphers is a 
// Caesar cipher, also known as a shift cipher. 
// In a shift cipher the meanings of the letters are shifted by 
// some set amount.

// A common modern use is the ROT13 cipher, where the values of 
// the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' 
// and so on.

// Write a function which takes a ROT13 encoded string as input 
// and returns a decoded string.

// All letters will be uppercase. Do not transform any 
// non-alphabetic character (i.e. spaces, punctuation), 
// but do pass them on.


// rot13("SERR PBQR PNZC") should decode to FREE CODE CAMP

// rot13("SERR CVMMN!") should decode to FREE PIZZA!

// rot13("SERR YBIR?") should decode to FREE LOVE?

// rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") should decode to THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.



// MY CODE

function rot13(str) {
    let newArr= str.split('')
    let test = newArr.map(a => a.charCodeAt())
    
    for (let i = 0; i < test.length; i++)
    if (test[i] >=65 && test[i] <= 90){
    test[i] += 13
    if(test[i] > 90){
      test[i] = (test[i] - 90) + 64
    }
    } 
    // console.log(test.map(a => String.fromCharCode(a)).join(''));
       return test.map(a => String.fromCharCode(a)).join('');
    }
    
    rot13("SERR PBQR PNZC");
    
console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR CVMMN!"));
console.log(rot13("SERR YBIR?"));
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
     