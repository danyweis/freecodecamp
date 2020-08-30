// Intermediate Algorithm Scripting: Sum All Primes
// A prime number is a whole number greater than 1 with exactly two
// divisors: 1 and itself. For example, 2 is a prime number because
// it is only divisible by 1 and 2. In contrast, 4 is not prime since
// it is divisible by 1, 2 and 4.

// Rewrite sumPrimes so it returns the sum of all prime numbers that
// are less than or equal to num.

// sumPrimes(10) should return a number.
// sumPrimes(10) should return 17.
// sumPrimes(977) should return 73156.

// MY CODE

function sumPrimes(num) {
    // CREATE ARRAY TO STORE PRIMES
    var result = [];
    // GO OVER THE NUMBERS +1 BECAUSE WE WANT TO TEST THE GIVEN NUMBER AS WELL
    for (var i = 1; i < num + 1; i++) {
        // 2 IS THE FIRST PRIME SO WE PUSH
        if (i === 2) {
            result.push(i);
        } else {
            var x = 1;
            // WHILE THE X IS SMALLER THEN THE I UNTIL THE LAST
            while (x < i) {
                x++;
                if (i % x === 0) {
                    break;
                }
                // -1 BECAUSE WE LOOK IF X<I THIS IS THE LAST PRIME IN I
                if (x === i - 1) result.push(i);
            }
        }
    }
    // console.log(result)
    return result.reduce((a, b) => a + b);
}
console.log(sumPrimes(977));
