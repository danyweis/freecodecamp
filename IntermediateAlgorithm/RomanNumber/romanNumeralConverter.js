// Convert the given number into a roman numeral
// All roman numerals answers should be provided in upper-case




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