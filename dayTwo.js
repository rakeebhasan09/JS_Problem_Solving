// Write a function reverseString(str) that returns the reverse of a given string.
// Input: 'hello'   → Output: 'olleh'Input: 'world'   → Output: 'dlrow'
// function reverseString(str) {
//     return str.split("").reverse().join("");
// }
// console.log(reverseString("rakeeb"));

// Write a function countVowels(str) that counts and returns the number of vowels (a, e, i, o, u) in a string.
// Input: 'hello'   → Output: 2; Input: 'javascript' → Output: 3
// function countVowels(str) {
//     const vowels = ["a", "e", "i", "o", "u"];
//     let totalVowels = 0;
//     for (const char of str.toLowerCase()) {
//         if (vowels.includes(char)) {
//             totalVowels++;
//         }
//     }
//     return totalVowels;
// }
// console.log(countVowels("javascript"));

// Write a function isPalindrome(str) that returns true if the string reads the same forwards and backwards.
// Input: 'racecar'  → Output: trueInput: 'hello'    → Output: false
// function isPalindrome(str) {
//     const reversedStr = str.split("").reverse().join("");
//     if (str === reversedStr) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(isPalindrome("hello"));

// Write a function titleCase(str) that capitalizes the first letter of every word in a string.
// Input: 'hello world'  → Output: 'Hello World'
function titleCase(str) {
    return str
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}
console.log(titleCase("hello world"));
