Find the First Non-Repeated Character

const str = "aabbcdde";

for (let char of str) {
  if (str.indexOf(char) === str.lastIndexOf(char)) {
    console.log(char);
    break;
  }
}


a simple login functionality
const users = [
  { email: "rahim@gmail.com", password: "1234" },
  { email: "karim@gmail.com", password: "5678" }
];

const email = "rahim@gmail.com";
const password = "1234";

const user = users.find(user => 
  user.email === email && user.password === password
);

if (user) {
  console.log("Login Successful");
} else {
  console.log("Invalid email or password");
}



Find the Second Largest Number
const numbers = [10, 5, 20, 8, 20, 15];

let largest = -Infinity;
let secondLargest = -Infinity;

for (let num of numbers) {
  if (num > largest) {
    secondLargest = largest;
    largest = num;
  } else if (num < largest && num > secondLargest) {
    secondLargest = num;
  }
}

console.log(secondLargest); // 15