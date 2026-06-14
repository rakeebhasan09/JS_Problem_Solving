//  Write a function sumArray(arr) that returns the sum of all numbers in an array.
// Input: [1, 2, 3, 4, 5]  → Output: 15
// function sumArray(arr) {
//     let sum = 0;
//     for (const number of arr) {
//         sum = sum + number;
//     }
//     return sum;
// }
// console.log(sumArray([1, 2, 3, 4, 5]));

//  Write a function findMax(arr) that returns the largest number in an array without using Math.max().
// Input: [3, 1, 7, 2, 9]  → Output: 9
// function findMax(arr) {
//     let largestNumber = 0;
//     for (const number of arr) {
//         if (number > largestNumber) {
//             largestNumber = number;
//         }
//     }
//     return largestNumber;
// }
// console.log(findMax([3, 1, 45, 7, 2, 9]));

// Write a function removeDuplicates(arr) that returns a new array with duplicate values removed.
// Input: [1, 2, 2, 3, 3, 4]  → Output: [1, 2, 3, 4]
function removeDuplicates(arr) {
    const noDuplicates = [];
    for (const number of arr) {
        if (!noDuplicates.includes(number)) {
            noDuplicates.push(number);
        }
    }
    return noDuplicates;
}
console.log(removeDuplicates([1, 2, 2, 3, 3, 4, 5, 10, 15, 15, 20, 22, 22]));
