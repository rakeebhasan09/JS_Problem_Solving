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


Find the Most Frequent Element
const numbers = [1, 3, 2, 3, 4, 3, 2, 2, 2];

const frequency = {};

for (let num of numbers) {
  frequency[num] = (frequency[num] || 0) + 1;
}

let mostFrequent = null;
let maxCount = 0;

for (let num in frequency) {
  if (frequency[num] > maxCount) {
    maxCount = frequency[num];
    mostFrequent = Number(num);
  }
}

console.log(mostFrequent); // 2
console.log(maxCount);     // 4
console.log(frequency);



Search Users by Name
const users = [
  { name: "Rahim Hasan" },
  { name: "Karim Ahmed" },
  { name: "Abdur Rahim" },
  { name: "Sakib Khan" }
];

const searchTerm = "rahim";

const result = users.filter(user =>
  user.name.toLowerCase().includes(searchTerm.toLowerCase())
);

console.log(result);


Remove Duplicate Objects
const users = [
  { id: 1, name: "Rahim" },
  { id: 2, name: "Karim" },
  { id: 1, name: "Rahim" },
  { id: 3, name: "Hasan" },
  { id: 2, name: "Karim" }
];

const result = users.filter((user, index, arr) => {
  return index === arr.findIndex(item => item.id === user.id);
});

console.log(result);



Check Anagrams
function isAnagram(str1, str2) {
  const word1 = str1.toLowerCase().split("").sort().join("");
  const word2 = str2.toLowerCase().split("").sort().join("");

  return word1 === word2;
}

console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world"));   // false
console.log(isAnagram("Dormitory", "Dirtyroom")); // true