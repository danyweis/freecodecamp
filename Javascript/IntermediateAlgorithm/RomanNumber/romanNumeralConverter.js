// Convert the given number into a roman numeral
// All roman numerals answers should be provided in upper-case



// MY CODE 2020
console.clear();
function convertToRoman(num) {
let result = []
let off = ''
for (let i = num ; i > 0 ; i = i - off){
  console.log(i);
  if (i >= 1 && i < 4){
      result.push('I')
      off = 1

   } else if(i === 4){
      result.push('IV')
      off = 4
    } else if(i >= 5 && i < 9){
      result.push('V')
      off = 5
    }  else if(i === 9){
      result.push('IX')
      off = 9
    }
    else if(i >= 10 && i < 40){
      result.push('X')
      off = 10
    }
    else if(i >= 40 && i < 50){
      result.push('XL')
      off = 40
    }
    else if(i >= 50 && i < 90){
      result.push('L')
      off = 50
    }
   
    else if(i >= 90 && i < 100){
      result.push('XC')
      off = 90
    }
    else if(i >= 100 && i < 400){
      result.push('C')
      off = 100
    }
    else if(i >= 400 && i < 500){
      result.push('CD')
      off = 400
    }
    else if(i >= 500 && i < 900){
      result.push('D')
      off = 500
    }
    else if(i >= 900 && i < 1000){
      result.push('CM')
      off = 900
    }
    else if(i >= 1000 && i < 4000){
      result.push('M')
      off = 1000
    }
    else {
      result.push('Sorry that number is to big')
      break;
    }
}
console.log(result.join(''));
  return result.join('');
}

convertToRoman(574);


// CODE FOUND ON STACKOVERFLOW

function convertToRoman(num) {
    var roman = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    };
    var str = '';
  
    for (var i of Object.keys(roman)) {
      var q = Math.floor(num / roman[i]);
      num -= q * roman[i];
      str += i.repeat(q);
    }
  
    return str;
  }
  convertToRoman(3689);
  
  /*
  with 3689 we Do Math.floor because 3689(num) / 1000(roman[i]) = 3.689 => floor makes it 3
  then num(3689) -= q (3)* roman[i](1000) => 3000
  then str (result starts as emty string) += add i.repeat(q) (i = M repeat as many times as q is) 
  now we have 689 left  then all starts over again
 */

// OLD SOLUTION

function convertToRoman(num) {
    var arr = [];
    var theNum = num;
    var test = "";

    test = theNum.toString().slice(-1);
    theNum = theNum - Number(test); //numero;
    if (Number(test) === 0) {

    } else if (Number(test) === 1) {
        arr.push("I");
    } else if (Number(test) === 2) {
        arr.push("II");
    } else if (Number(test) === 3) {
        arr.push("III");
    } else if (Number(test) === 4) {
        arr.push("IV");
    } else if (Number(test) === 5) {
        arr.push("V");
    } else if (Number(test) === 6) {
        arr.push("VI");
    } else if (Number(test) === 7) {
        arr.push("VII");
    } else if (Number(test) === 8) {
        arr.push("VIII");
    } else if (Number(test) === 9) {
        arr.push("IX");
    }
    if (theNum > 9) {
        test = theNum.toString().slice(-2);
        theNum = theNum - Number(test);
        if (Number(test) === 0) {

        } else if (Number(test) === 10) {
            arr.unshift("X");
        } else if (Number(test) === 20) {
            arr.unshift("XX");
        } else if (Number(test) === 30) {
            arr.unshift("XXX");
        } else if (Number(test) === 40) {
            arr.unshift("XL");
        } else if (Number(test) === 50) {
            arr.unshift("L");
        } else if (Number(test) === 60) {
            arr.unshift("LX");
        } else if (Number(test) === 70) {
            arr.unshift("LXX");
        } else if (Number(test) === 80) {
            arr.unshift("LXXX");
        } else if (Number(test) === 90) {
            arr.unshift("XC");
        }
    }
    if (theNum > 90) {
        test = theNum.toString().slice(-3);
        theNum = theNum - Number(test);
        if (Number(test) === 0) {} else if (Number(test) === 100) {
            arr.unshift("C");
        } else if (Number(test) === 200) {
            arr.unshift("CC");
        } else if (Number(test) === 300) {
            arr.unshift("CCC");
        } else if (Number(test) === 400) {
            arr.unshift("CD");
        } else if (Number(test) === 500) {
            arr.unshift("D");
        } else if (Number(test) === 600) {
            arr.unshift("DC");
        } else if (Number(test) === 700) {
            arr.unshift("DCC");
        } else if (Number(test) === 800) {
            arr.unshift("DCCC");
        } else if (Number(test) === 900) {
            arr.unshift("CM");
        }
    }
    if (theNum > 900) {
        test = theNum.toString().slice(-10);
        var over1000 = Number(test) / 1000;
        //console.log(over1000);
        for (var i = 0; i < over1000; i++) {
            arr.unshift("M");
        }
    }
    // console.log(test);
    console.log(arr);
    var result = arr.join('');
    console.log(result);
    return result;
}

convertToRoman(36);





// convertToRoman(2) should return "II".
// convertToRoman(3) should return "III".
// convertToRoman(4) should return "IV".
// convertToRoman(5) should return "V".
// convertToRoman(9) should return "IX".
// convertToRoman(12) should return "XII".
// convertToRoman(16) should return "XVI".
// convertToRoman(29) should return "XXIX".
// convertToRoman(44) should return "XLIV".
// convertToRoman(45) should return "XLV"
// convertToRoman(68) should return "LXVIII"
// convertToRoman(83) should return "LXXXIII"
// convertToRoman(97) should return "XCVII"
// convertToRoman(99) should return "XCIX"
// convertToRoman(500) should return "D"
// convertToRoman(501) should return "DI"
// convertToRoman(649) should return "DCXLIX"
// convertToRoman(798) should return "DCCXCVIII"
// convertToRoman(891) should return "DCCCXCI"
// convertToRoman(1000) should return "M"
// convertToRoman(1004) should return "MIV"
// convertToRoman(1006) should return "MVI"
// convertToRoman(1023) should return "MXXIII"
// convertToRoman(2014) should return "MMXIV"
// convertToRoman(3999) should return "MMMCMXCIX"