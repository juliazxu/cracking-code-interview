// 1.2 Write code to reverse a C-Style String. (C-String means that “abcd” is represented as
  // five characters, including the null character.)
  
// Approach
  
  // 1: cut off the null char at beginning, reverse the string, manually add a null character at the end
  // 2: mutating the string: looping through str, cut off beginning and add it to the end
  // 3: creating a new string: loop through str, take the current char and concat or slice it to the new string

// Approach 3
// To Do: C style

const reverseStr = str => {
const reverseArr = [];
for (let i = str.length - 1; i >= 0; i--) {
    reverseArr.push(str[i]);
}
return reverseArr.join("");
}