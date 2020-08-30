// Intermediate Algorithm Scripting: Pig Latin

// Pig Latin is a way of altering English Words. The rules are as follows:

// - If a word begins with a consonant, take the first consonant or consonant cluster, 
// move it to the end of the word, and add "ay" to it.
// - If a word begins with a vowel, just add "way" at the end.

// Translate the provided string to Pig Latin.
// Input strings are guaranteed to be English words in all lowercase.

// translatePigLatin("california") should return "aliforniacay".
// translatePigLatin("paragraphs") should return "aragraphspay".
// translatePigLatin("glove") should return "oveglay".
// translatePigLatin("algorithm") should return "algorithmway".
// translatePigLatin("eight") should return "eightway".
// Should handle words where the first vowel comes in the middle of the word. translatePigLatin("schwartz") should return "artzschway".
// Should handle words without vowels. translatePigLatin("rhythm") should return "rhythmay".

// MY CODE

function translatePigLatin(str) {

    let regvow = /^[aeiou]/
    let regcon = /^[bcdfghjklmnpqrstvwxyz]+/g
    
    if(regvow.test(str) === true){
      return str + 'way'
    } else if (regcon.test(str)){
      let start = str.match(regcon)[0]
      return str.slice(start.length) + start + 'ay'
      }
    
    }
    
    translatePigLatin("consonant");
    console.log(translatePigLatin("consonant"));
    console.log(translatePigLatin("california"));
    console.log(translatePigLatin("paragraphs"));
    console.log(translatePigLatin("glove"));
    console.log(translatePigLatin("algorithm"));
    console.log(translatePigLatin("eight"));
  