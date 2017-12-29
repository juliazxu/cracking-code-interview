// 44 Given a binary search tree, design an algorithm which creates a 
// linked list of all the nodes at each depth (i e , if you have a tree with depth D, you’ll have D linked lists)

// breadth first search, at the end of each level, end the linked list and start a new one

class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }

  addLeftNode(node) {
    this.left = node;
  }

  addRightNode(node) {
    this.right = node;
  }
}

class BST {
  constructor(node) {
    this.root = node;
  }
}

var node0 = new Node(0);
var node1 = new Node(1);
var node2 = new Node(2);
var node3 = new Node(3);
var node4 = new Node(4);
var node5 = new Node(5);
var node6 = new Node(6);

node3.addLeftNode(node1);
node1.addLeftNode(node0);
node1.addRightNode(node2);

node3.addRightNode(node5);
node5.addLeftNode(node4);
node5.addRightNode(node6);

var tree1 = new BST(node3);

class LLNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor(node) {
    this.head = node;
  }
}

var arrayToLL = arr => {
  if (arr.length !== 0) {
    var head = new LLNode(arr[0]);
    var linkedList = new LinkedList(head);
    var currentLLNode = head;
    for (let i = 1; i < arr.length; i++) {
      var node = new LLNode(arr[i]);
      currentLLNode.next = node;
      currentLLNode = node;
    }
  return linkedList;
  }
}

var makeLL = tree => {

  var result = [];

  // create the first linked list from the root
  if (!tree.root) {
    console.log("Empty tree");
    return;
  }
  var newHead = new LLNode(tree.root.value);
  var ll = new LinkedList(newHead);
  result.push(ll);
  var currentNodes = [tree.root];

  while (currentNodes.length > 0) {
    var newLLNodes = [];
    var newTreeNodes = [];
    for (let node of currentNodes) {
      if (node.left) {
        var newNode = new LLNode(node.left.value);
        newLLNodes.push(newNode);
        newTreeNodes.push(node.left);
      }
      if (node.right) {
        var newNode = new LLNode(node.right.value);
        newLLNodes.push(newNode);
        newTreeNodes.push(node.right);
      }
    }

    if (newLLNodes.length > 0) {
      var resultLL = arrayToLL(newLLNodes);
      result.push(resultLL);
    }

    currentNodes = newTreeNodes;
    newLLNodes = [];
  }

  return result;
}

makeLL(tree1);