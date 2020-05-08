// Intermediate Algorithm Scripting: Sorted Union
// Write a function that takes two or more arrays and returns a new array of unique values 
// in the order of the original provided arrays.

// In other words, all values present from all arrays should be included in their original order, 
// but with no duplicates in the final array.

// The unique numbers should be sorted by their original order, 
// but the final array should not be sorted in numerical order.

// Check the assertion tests for examples.


// uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
// uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].
// uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8]

function uniteUnique(arr) {

    let arg = []
    let result = []
    let i= 0
    while(arguments[i] !== undefined){
        arg.push(arguments[i])
        i++
    }
    arg = arg.flat()
    for( let j =0 ; j < arg.length;){
        if (arg[j] in arg.slice(0,j)){
        let first = arg.slice(0,j)
        console.log('first : ' + first)
        let last = arg.slice(j+1)
        if (last == null) {
            return first
        }
        arg = first.concat(...last)
    
        }else{
            j++
        }
    }
    return arg;
}

uniteUnique([1, 3, 2], [5, 2, 1]);
