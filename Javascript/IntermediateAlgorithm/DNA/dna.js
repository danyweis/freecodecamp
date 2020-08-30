// The DNA strand is missing the pairing element. 
// Take each character, get its pair, and return the results as a 2d array.

// Base pairs are a pair of AT and CG. Match the missing element to the provided character.

// Return the provided character as the first element in each array.

// For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

// The character and its pair are paired up in an array, 
// and all the arrays are grouped into one encapsulating array.

function pairElement(str) {
  var arr = str.split('');
  str = [];
  for(i=0; i < arr.length; i++){
    var arrTest = [];
    if (arr[i] === "A"){
      arrTest.push(arr[i]);
      arrTest.push("T");
      str.push(arrTest);
    } else if(arr[i] === "T"){
      arrTest.push(arr[i]);
      arrTest.push("A");
      str.push(arrTest);
    } else if (arr[i] === "G"){
      arrTest.push(arr[i]);
      arrTest.push("C");
      str.push(arrTest);
    } else if(arr[i] === "C"){
      arrTest.push(arr[i]);
      arrTest.push("G");
      str.push(arrTest);
    }
    
    console.log(arrTest);
  }
  return str;
}

pairElement("GCG");


//pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
//pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
//pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].
