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