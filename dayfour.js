// Write a function fizzBuzz(n) that prints numbers from 1 to n. For multiples of 3 print 'Fizz', multiples of 5 print 'Buzz', multiples of both print 'FizzBuzz'.
// Input: 15Output: 1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,FizzBuzz
// function fizzBuzz(n) {
//     for (let i = 1; i <= n; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log("FizzBuzz");
//         } else if (i % 3 === 0) {
//             console.log("Fizz");
//         } else if (i % 5 === 0) {
//             console.log("Buzz");
//         } else {
//             console.log(i);
//         }
//     }
// }
// fizzBuzz(15);

// Write a recursive function factorial(n) that returns the factorial of a non-negative integer n.
// Input: 5  → Output: 120 (5×4×3×2×1)Input: 0  → Output: 1
function factorial(n) {
    let factorialNumber = 1;
    for (let number = 1; number <= n; number++) {
        factorialNumber = factorialNumber * number;
    }
    return factorialNumber;
}
console.log(factorial(4));
