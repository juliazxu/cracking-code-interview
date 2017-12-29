
// 'cat'

// all combinations of a string (order does not matter, does not require every letter)

// 'c', 'a', 't', 'ca', 'ct', 'at', 'cat'

// if i pass you ["a", "b", "c", "d"] return me every subset
// like return ["a"] and ["a", "b"] and ["a", "d"] and ["b", "c", "d']

const subArr = arr => {
  let result = [];
  let i = 0;
  const addSub = newArr => {
    result.push(newArr);
    i++;
    while (i < arr.length) {
      addSub(arr.slice(i));
    }
  }
  addSub(arr);
  return result;
}

const subArr = arr => {
  const addSub = newArr => {
    if (newArr.length === 0) {
      return;
    }
    newArr = newArr.concat(addSub(newArr.slice(1)))
    return newArr;
  }
  return addSub(arr);
}

// addSub([1, 2, 3, 4])
// result = [].concat(addSub[2, 3, 4]);

// all substrings of a string

// 'c', 'a', 't', 'ca', 'at', 'cat'
// 'cat', 'ca', 'at', 'c', 'a', 't'
// (0, str.length), (0, str.length - 1)

var subStr = str => {
  subArr = new Set();
  for (let i = 0; i < str.length; i++) {
      subArr.add(str[i]);
      subArr.add(str.slice(0, i));
      subArr.add(str.slice(i, str.length));
  }
  subArr.delete("");
  return subArr;
}

var subStr = str => {
  let arr = [];
  addSubstr = str => {
    if (str.length === 0) {
      return "";
    }
    arr.push(str);
    addSubstr(str.slice(1));
  }
  addSubstr(str);
  let mapped = arr.map(item => item);
  return mapped;
}

// all permutations of a string (order does matter, require every letter)

// 'cat', 'cta', 'atc', 'act', 'tca', 'tac'

var makePerm = str => {
  permArr = [];
  const addLetter = str => {
    for (let i = 0; i < str.length; i++) {
      const removedLetter = str[i];
      const remainingLetters = str.slice(i);
      if (remainingLetters.length === 0) {
        return;
      }
      permArr.push(removedLetter + addLetter(remainingLetters));
    }
  }
  addLetter(str);
  return permArr;
}

// brute force: [0][1][2] [1][2][0] 
// number of results is string.length factorial

// more questions

// pinterest

// build a priority queue (first in, first out)
// clone a linked list that always has a next and a pointer to any random node
// given an array of numbers. Go to any index, and add the index to the value. Find all indexes that can lead to index 0.
// you're given a binary tree. each of the nodes has a value. you must find all paths that sum to a particular number.
// re-implement promises
// implement promise.all (waits for a bunch of promises are over)

// dropbox

// do game of life
// now imagine that the game board is a million by a million (go line by line)

// facebook

// print the nodes of the binary tree row by row
// print the nodes of a binary tree column by column
// adding binary strings together
