// 43 Given a sorted (increasing order) array, 
// write an algorithm to create a binary tree with minimal height

// Splice the array in half, then take the middle value (round down) and set as root
// then take the left array and take the middle value, set as left node
// then take the right array and take the middle value, set as right node

// repeat for each node until there are no values in the array

const arrayToTree = arr => {
  let result = null;
  if (arr.length === 0) {
    console.log('Array is empty.');
    return;
  } else if (arr.length === 1) {
    const root = new Node(arr[0]);
    const tree = new BinaryTree(root);
    result = tree;
  } else {
    let mid = Math.floor((arr.length) / 2);
    let midNode = new Node(arr[mid]);
    const tree = new BinaryTree(midNode);
    const nodesToCheck = [{currNode: midNode, currArr: arr}];
    // iterate through every single node
    while (nodesToCheck.length !== 0) {
      let mid = Math.floor((nodesToCheck[0].currArr.length) / 2);
      let leftArr = nodesToCheck[0].currArr.splice(0, mid);
      let rightArr = nodesToCheck[0].currArr.splice(1);
      console.log('node is', 
                  nodesToCheck[0].currNode,
                  'nodesToCheck[0].currArr is',
                  nodesToCheck[0].currArr,
                  'left array is',
                  leftArr,
                  'right array is', rightArr,);
      // add as left node
      if (leftArr.length !== 0) {
        let mid = Math.floor((leftArr.length) / 2);
        const leftNode = new Node(leftArr[mid])
        nodesToCheck[0].currNode.addToLeft(leftNode);
        nodesToCheck.push({currNode: leftNode, currArr: leftArr});
      }
      // add as right node
      if (rightArr.length !== 0) {
        let mid = Math.floor((rightArr.length) / 2);
        const rightNode = new Node(rightArr[mid]);
        nodesToCheck[0].currNode.addToRight(rightNode);
        nodesToCheck.push({currNode: rightNode, currArr: rightArr});
      }
      console.log(tree);
      nodesToCheck.shift();
    }
    result = tree;
  }
  return result;
}

arrayToTree([1,2,3,4,5,6,7,8,9,10]);
arrayToTree([1,2,3,4,5,6,7,8,9]);
arrayToTree([1,2,3,4,5,6,6,7,8,9]);
arrayToTree([1,2,3,4,5,6,6,7,8]);