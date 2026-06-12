// Write a function reverseString(str) that returns the reverse of a given string.
// Input: 'hello'   → Output: 'olleh'Input: 'world'   → Output: 'dlrow'
function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString("rakeeb"));
