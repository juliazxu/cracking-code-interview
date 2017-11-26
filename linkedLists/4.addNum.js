// 2.4 You have two numbers represented by a linked list, where each node contains a single
// digit. The digits are stored in reverse order, such that the 1’s digit is at the head of
// the list. Write a function that adds the two numbers and returns the sum as a linked
// list.
// EXAMPLE
// Input: (3 -> 1 -> 5) + (5 -> 9 -> 2)
// Output: 8 -> 0 -> 8

// create two arrays in non-reverse order for the two inputs
// add the two array numbers, make result into linked list

var makeList = (list1, list2) => {
    const list1Arr = [], list2Arr = [];
    let currNode1 = list1.head, currNode2 = list2.head;
    for (let i = 0; i < list1.length; i++) {
        list1Arr.push(currNode1.value);
        console.log(list1Arr);
        currNode1 = currNode1.next;
    }
    for (let i = 0; i < list2.length; i++) {
        list2Arr.push(currNode2.value);
        console.log(list2Arr);
        currNode2 = currNode2.next;
    }
    
    return [list1Arr, list2Arr];
  }
  
  const addNum = (list1, list2) => {
    arrs = makeList(list1, list2);
    let list1Arr = arrs[0], list2Arr = arrs[1];
    const num1 = list1Arr.reverse().join("");
    const num2 = list2Arr.reverse().join("");
    // check to see if they return a string or number
    const sum = String(Number(num1) + Number(num2));
    const numSum = sum.split("");
    
    const resultList = new DoublyList();
    resultList.head = new Node(numSum[numSum.length - 1]);
    let currNode = resultList.head;
    let prevNode = null;
    console.log(resultList);
    
    for (let i = 1; i < numSum.length - 1; i++) {
        if (numSum[i + 1]) {
            currNode.next = new Node(numSum[i + 1]);
        }
        currNode.previous = prevNode;
        prevNode = currNode;
        currNode = currNode.next;
    }
    return resultList;
}
  
var list1 = new DoublyList();
list1.add(3);
list1.add(1);
list1.add(5);

var list2 = new DoublyList();
list2.add(5);
list2.add(9);
list2.add(2);

addNum(list1, list2);