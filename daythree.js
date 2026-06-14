//  Write a function sumArray(arr) that returns the sum of all numbers in an array.
// Input: [1, 2, 3, 4, 5]  → Output: 15
function sumArray(arr) {
    let sum = 0;
    for (const number of arr) {
        sum = sum + number;
    }
    return sum;
}
console.log(sumArray([1, 2, 3, 4, 5]));
