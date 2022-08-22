// Exercise 01
console.log("  -----------------------------------");
console.log("   ++++++++++ 01 Exercise ++++++++++");

function reverse(str) {
  if (str === "") {
    return "";
  } else {
    return reverse(str.substring(1)) + str.charAt(0);
  }
}

const string = "hello world";

const output = reverse(string);

console.log(output);
