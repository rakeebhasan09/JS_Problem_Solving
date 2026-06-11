// Write a function that swaps the values of two variables without using a third variable.
// Input: a = 5, b = 10; Output: a = 10, b = 5
function swapVariabels(a, b) {
    a = a + b;
    b = a - b;
    a = a - b;

    console.log("a = ", a);
    console.log("b = ", b);
}
swapVariabels(5, 10);

// Write a function isEven(n) that returns true if a number is even, and false if it is odd.
// Input: 4  → Output: trueInput: 7  → Output: false
function isEven(n) {
    if (n % 2 == 0) {
        console.log(true);
    } else {
        console.log(false);
    }
}
isEven(19);

// Write a function largest(a, b, c) that returns the largest of three numbers.
// Input: 3, 7, 5  → Output: 7
function largest(a, b, c) {
    let largest = Math.max(a, b, c);
    console.log(largest);
}
largest(3, 7, 5);

// Write a function toFahrenheit(celsius) that converts a Celsius temperature to Fahrenheit.
// Input: 0   → Output: 32; Input: 100 → Output: 212
function toFahrenheit(celsius) {
    let fahrenheit = (celsius * 9) / 5 + 32;
    console.log(fahrenheit);
}
toFahrenheit(100);

// Write a function checkSign(n) that returns 'positive', 'negative', or 'zero' based on the value of n.
// Input: -5  → Output: 'negative'Input: 0   → Output: 'zero'
function checkSign(n) {
    if (n < 0) {
        console.log(n, "is negative");
    } else if (n == 0) {
        console.log(n, "is equal 0");
    } else {
        console.log(n, "is positive");
    }
}
checkSign(0);
