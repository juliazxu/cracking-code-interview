// 1.4 Write a method to decide if two strings are anagrams or not.
  
// turn two strings into objects with key value pairs letter: # of occurrences
// evaluate if the objects are the same

const isAnagram = (str1, str2) => {
    const str1Obj = {};
    const str2Obj = {};
    for (let char of str1) { 
        str1Obj[char] = (str1Obj[char] || 0) + 1;
    }
    for (let char of str2) {
        str2Obj[char] = (str2Obj[char] || 0) + 1;
    }

    const keys = new Set(Object.keys(str1Obj).concat(Object.keys(str2Obj)));

    for (const key of keys) {
        if (str1Obj[key] !== str2Obj[key]) {
        return false;
        }
    }

    return true;
};