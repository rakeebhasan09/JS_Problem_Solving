const fruits = ["apple", "banana", "apple", "mango", "banana", "apple"];

const frequency = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

console.log(frequency);


নিচের object থেকে street, city এবং country console-এ দেখাও।

const user = {
  name: "Rakeeb",
  email: "rakeeb@gmail.com",
  address: {
    street: "College Road",
    city: "Mymensingh",
    country: "Bangladesh"
  }
};

console.log(user.address.street);
console.log(user.address.city);
console.log(user.address.country);


Count Words in a Sentence

const sentence = "javascript is easy and javascript is powerful";

const words = sentence.toLowerCase().split(" ");

const result = words.reduce((acc, word) => {
  acc[word] = (acc[word] || 0) + 1;
  return acc;
}, {});

console.log(result);


Group Students by Grade
const students = [
  { name: "A", grade: "A" },
  { name: "B", grade: "B" },
  { name: "C", grade: "A" },
  { name: "D", grade: "C" },
  { name: "E", grade: "B" },
  { name: "F", grade: "A" }
];

const result = students.reduce((acc, student) => {
  const grade = student.grade;

  if (!acc[grade]) {
    acc[grade] = [];
  }

  acc[grade].push(student.name);

  return acc;
}, {});

console.log(result);




const products = [
  { name: "Laptop", price: 80000 },
  { name: "Mouse", price: 1500 },
  { name: "Keyboard", price: 3000 },
  { name: "Monitor", price: 25000 },
  { name: "Headphone", price: 5000 }
];

function filterProducts(products, minPrice, maxPrice) {
  return products.filter(product => {
    return product.price >= minPrice && product.price <= maxPrice;
  });
}

const result = filterProducts(products, 3000, 30000);

console.log(result);