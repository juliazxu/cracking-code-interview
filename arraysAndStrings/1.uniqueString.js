// Implement an algorithm to determine if a string has all unique characters. What if you
// can not use additional data structures?

// Approaches

  // 1. Use a set, compare the size of the set to the length of the string
  // 2. Use a loop, create a strSubstring to capture my traversal through string
  // use indexOf or includes to see if the current char already exists in my subString
  // 3. Use an object, I would loop through the str and add the char as a key
  // if there is a conflict, then return false

// Approach 3

const isUnique = str => {
    const strSet = new Set(str.split(""));
    return strSet.size === str.length;
};
  
const isUniqueStr = str => {
    const strObj = {};
    for (let char of str) {
        if (strObj[char]) {
        return false;
        } else {
        strObj[char] = true;
        }
    }
    return true;
};