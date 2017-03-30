//Find the missing letter in the passed letter range and return it.

//If all letters are present in the range, return undefined.


function fearNotLetter(str) {
    var arr = str.split('');
    var arrTest = [];
    for (i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charCodeAt(0);
    }
    for (j = arr[0]; j <= arr.slice(-1); j++) {
        arrTest.push(j);
    }
    var string = [];
    for (x = 0; x < arrTest.length; x++) {
        str = "";
        if (arr.indexOf(arrTest[x]) === -1) {
            string.push(arrTest[x]);
        }
    }
    if (string[0] === undefined) {
        str = undefined;
    } else {
        str = String.fromCharCode(string[0]);
    }


    return str;
}

fearNotLetter("abce");


//fearNotLetter("abce") should return "d".
//fearNotLetter("abcdefghjklmno") should return "i".
//fearNotLetter("bcd") should return undefined.
//fearNotLetter("yz") should return undefined.