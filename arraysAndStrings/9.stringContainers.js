
// 'cat'

// all combinations of a string (order does not matter, does not require every letter)

// 'c', 'a', 't', 'ca', 'ct', 'at', 'cat'


const combStr = input => {
  let result = [];
  const addComb = str => {
    while (result.length < input.length) {
      result.push(str);
      console.log('str is', str);
      str = str.slice(1);
      addComb(str);
    }
  }
  addComb(input);
  return result;
}

// if i pass you ["a", "b", "c", "d"] return me every subset
// like return ["a"] and ["a", "b"] and ["a", "d"] and ["b", "c", "d']

const combinations = str => {
  var fn = (active, rest, a) => {
    if (!active && !rest)
      return;
    if (!rest) {
      a.push(active);
    } else {
      fn(active + rest[0], rest.slice(1), a);
      fn(active, rest.slice(1), a);
    }
    return a;
  }
  return fn("", str, []);
}

fn("", 'abc', []);
  fn('a', 'bc', []);
    fn('ab', 'c', []);
      fn('abc', '', []);
      pushed 'abc'
      fn('ab', '', []);
      pushed 'ab'
    fn('a', 'c', []);
      fn('ac', '', []);
      pushed 'ac'
      fn('a', '', []);
      pushed 'a'
  fn('', 'bc', []);
    fn('b', 'c', []);
      fn('bc', '', []);
      pushed 'bc'
      fn('b', '', [])
      pushed 'b'
    fn('', 'c', []);
      fn('c', '', []);
      pushed 'c'
      fn('', '', []);
      return (a)

const comb = str => {
  const result = [];
  const addComb = (start, end) => {
    if (!start) {
      result.push(end);
      return;
    } else {
      addComb(start.slice(1), end);
      addComb(start.slice(1), end += start[0]);
    }
  }
  addComb(str, "");
  return result;
}

const perm = str => {
  const result = [];
  const addPerm = (start, end) => {
    if (end.length = str.length) {
      result.push(end);
      return;
    } else {
      for (let item of start) {
        addPerm(start.slice(1), start[0]);
        addPerm(start, end.slice(0, 1) + end + end.slice(1));
        addPerm(start, end.slice(1));
      }
    }
  }
  addPerm(str, "");
  return result;
}

1234; 0
  234; 01, 10
    34: 012, 201, 102, 210, 120

const perm = str => {
  let result = [str[0]];
  for (let letter of str.substr(1)) {
    arr = [];
    for (let j = 0; j < result.length; j++) {
      for (let i = 0; i < result[0].length + 1; i++) {
        arr.push(result[j].slice(0, i) + letter + result[j].slice(i));
      }
    }
    result = arr;
  }
  return result;
}

// 0
// 10, 01

const perm = str => {
  let result = [];
  const makePerm = (start, end) => {
    if (!start) {
      result.push(end);
      return;
    } else {
      makePerm(start.slice(1), end)
      makePerm(start.slice(1), start.slice(0, 1) + end + start.slice(1));
    }
  }
  makePerm(str, "")
  return result;
}

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

var subStrIterative = str => {
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
  const result = [];
  const fn = (active, cut) => {
    if (!active) {
      return;
    } else {
      result.push(active);
      result.push(cut);
      for (let i = 0; i < cut.length; i++) {
        result.push(active + cut.slice(0, i));
      }
      cut += active[0];
      fn(active.slice(1), cut);
    }
  }
  fn(str, "");
  return result;
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
  let permArr = [];
  const switcheroo = (left, letter, right) => {
    const result = [];
    result.push(left + letter + right);
    result.push(left + right + letter);
    result.push(letter + left + right);
    result.push(letter + right + left);
    result.push(right + left + letter);
    result.push(right + letter + left);
    return result;
  }
  for (let i = 0; i < str.length; i++) {
    permArr = permArr.concat(switcheroo(str.slice(0, i), str[i], str.slice(i + 1, str.length)));
  }
  const result = new Set(permArr);
  return result;
}

var makePerm = str => {
  let permArr = [];
  const switcheroo = (input, end) => {
    if (!input) {
      permArr.push(end);
      return;
    } else {
      console.log('input is', input, 'end is', end);
      for (let i = 0; i < str.length; i++) {
        switcheroo(input.slice(i), end += input[0]);
      }
    }
  }
  switcheroo(str, "");
  return permArr;
}

// brute force: [0][1][2] [1][2][0] 
// number of results is string.length factorial

// more questions

// pinterest

// build a priority queue (first in, first out)

// queue with priority

class PriorityQueue {
  constructor() {
    this.data = [];
    this.size = 0;
  }

  push(priority, data) {
    this.data.push({ priority: priority, data: data });
    this.size++;
  }

  pop() {
    let currItem = this.data[0];
    for (let item of this.data) {
      if (item.priority > currItem.priority) {
        currItem = item;
      }
    }
    this.data.splice(this.data.indexOf(currItem), 1);
    this.size--;
    return currItem;
  }
}

var queue = new PriorityQueue();

queue.push(5, 'this is first');
queue.push(1, 'this fourth');
queue.push(1, 'this is fifth');
queue.push(2, 'this is third');
queue.push(3, 'this is second');

while (queue.size > 0) {
  console.log(queue.pop());
}

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

const arr1 = ['a', 'b', 'c'];
const arr2 = ['ab', 'ac', 'ba', 'ca', 'bc', 'cb'];

arr1.map( item => {
  for (let item2 of arr2) {
    console.log(item + item2);
  }
})

str = 'cat'

// still gotta slice it, take out letter
// then take remaining letters and jumble them all around
// then add letter back in every position