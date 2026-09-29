Find the First Non-Repeated Character

const str = "aabbcdde";

for (let char of str) {
  if (str.indexOf(char) === str.lastIndexOf(char)) {
    console.log(char);
    break;
  }
}