// Intermediate Algorithm Scripting: Steamroller
// Flatten a nested array. You must account for varying
// levels of nesting.

// steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
// steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
// steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
// steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].

// Your solution should not use the Array.prototype.flat()
// or Array.prototype.flatMap() methods.

// MY CODE

function steamrollArray(arr) {
    let result = [].concat(...arr);
    while (Array.isArray(result)) {
        // be carefull this can become infinit loop
        let test = [].concat(...result);
        result = test;
    }

    console.log(result);
    return result;
}

steamrollArray([1, [], [2], [3, [[4]]]]);
