//  Return an English translated sentence of the passed binary string.


//  SOLIUTION 2020
function binaryAgent2020(str) {

    return str.split(" ").map(function(e){
        eturn String.fromCharCode(parseInt(e,2))
    }).join('');
    
    }

binaryAgent2020("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");





//  The binary string will be space separated.

//  String.prototype.charCodeAt()
//  String.fromCharCode()


function binaryAgent(str) {
    var arr = str.split(' ');
    for (var i = 0; i < arr.length; i++) {
        arr[i] = parseInt(arr[i], 2).toString(10); // CHANGE BINARY EN CHARCODE
        arr[i] = String.fromCharCode(arr[i]);
    }

    //str = arr.toString();
    //str = str.replace(/,/, "");

    // ou

    str = arr.join("");

    return str;
}





binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");


// binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111") should return "Aren't bonfires fun!?"

//binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001") should return "I love FreeCodeCamp!"