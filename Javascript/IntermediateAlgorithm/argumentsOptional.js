// Intermediate Algorithm Scripting: Arguments Optional
// Create a function that sums two arguments together. If only one argument 
// is provided, then return a function that expects one argument and returns 
// the sum.

// For example, addTogether(2, 3) should return 5, and addTogether(2) 
// should return a function.

// Calling this returned function with a single argument will then return 
// the sum:


// var sumTwoAnd = addTogether(2);
// sumTwoAnd(3) returns 5.


// If either argument isn't a valid number, return undefined.


// addTogether(2, 3) should return 5.
// addTogether(2)(3) should return 5.
// addTogether("http://bit.ly/IqT6zt") should return undefined.
// addTogether(2, "3") should return undefined.
// addTogether(2)([3]) should return undefined.

// MY CODE

function addTogether() {

var num1 = arguments[0]
var num2 = arguments[1]

if (typeof num1 === "string" || typeof num2 === "string"){
    return undefined
    }else if(arguments.length === 1){
        return function sumTwoAnd(num3) {
            var num3 = arguments[0];
            if (typeof num3 === "number"){
                return num1 + num3
            } else {
                return undefined
            }
        }
    } else {
        return num1 + num2
    }
}

console.log(addTogether('hello'));
console.log(addTogether(2)(5));
console.log(addTogether("http://bit.ly/IqT6zt"));
console.log(addTogether(2, "3"));
console.log(addTogether(2),([3]));
