// 1.3 Design an algorithm and write code to remove the duplicate characters in a string
  // without using any additional buffer. NOTE: One or two additional variables are fine.
  // An extra copy of the array is not.
  // FOLLOW UP
  // Write the test cases for this method.

// create a new string, iterate through string, check to see if the character already exists
// if it doesn't exist, add it to the string. If it does, continue

const removeDups = str => {
let newStr = "";
for (let char of str) {
    if (newStr.indexOf(char) === -1) {
    newStr = newStr.concat(char);
    }
}
return newStr;
}