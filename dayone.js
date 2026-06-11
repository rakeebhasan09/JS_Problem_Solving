// Problem - Write a function that swaps the values of two variables without using a third variable.
// Input: a = 5, b = 10; Output: a = 10, b = 5
function swapVariabels(a, b) {
    a = a + b;
    b = a - b;
    a = a - b;

    console.log("a = ", a);
    console.log("b = ", b);
}

swapVariabels(5, 10);
