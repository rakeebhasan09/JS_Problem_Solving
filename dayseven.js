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