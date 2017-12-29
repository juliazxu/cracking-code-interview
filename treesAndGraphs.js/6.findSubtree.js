// 47 You have two very large binary trees: 
// T1, with millions of nodes, and T2, with hundreds of nodes 
// Create an algorithm to decide if T2 is a subtree of T1

// iterate through t1 until you find the root of t2 as a node
// if yes, then continue through the rest of the tree to see if it matches t2
// if it matches every single node of t2, then it is a subtree

class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }

  changeValue(val) {
      this.value = val;
  }

  addLeft(node) {
    this.left = node;
  }

  addRight(node) {
    this.right = node;
  }
}

class BinaryTree {
  constructor(node) {
    this.root = node;
  }
  
  //not using a stack
  dFS(val) {
    let returnNodes = [];
    const search = node => {
      if (node.value === val) {
        returnNode.push(node);
      } else {
        search(node.left);
        search(node.right);
      }
    }
    search(this.root);
    return returnNode;
  }

  dFSNode(node) {
    let returnNodes = [];
    const search = searchNode => {
      if (searchNode === node) {
        returnNodes.push(searchNode);
      } else {
        if (searchNode.left) {
          search(searchNode.left);
        }
        if (searchNode.right) {
          search(searchNode.right);
        }
      }
    }
    search(this.root);
    return returnNodes;
  }
}

const isSameNodeVals = (bigTreeNode, littleTreeNode) => {
  let result = true;
  if (littleTreeNode.left) {
    if (bigTreeNode.left.value === littleTreeNode.left.value) {
      isSame(bigTreeNode.left, littleTreeNode.left);
    }
    result = false;
  }
  if (littleTreeNode.right) {
    if (bigTreeNode.right.value === littleTreeNode.right.value) {
      isSame(bigTreeNode.right, littleTreeNode.right);
    }
    result = false;
  }
  return result;
}

// searches to see if a tree is in another tree (does not have to be subtree)

const isTreeinTree = (bigTree, littleTree) => {
  let littleTreeRoot = littleTree.root.value;
  let equalNodes = bigTree.dFS(valueToSearch);
  if (equalNodes.length === 0) {
    return false;
  } else {
    for (let bigTreeNode in equalNodes) {
      if (isSameNodeVals(bigTreeNode, littleTree.root)) {
        return true;
      }
    }
  }
  return false;
}

// checks if the nodes are the same, requires node to be stored the same in memory

const isSame = (bigTreeNode, littleTreeNode) => {
  let result = true;
  if (bigTreeNode.left) {
    if (bigTreeNode.left === littleTreeNode.left) {
      isSame(bigTreeNode.left, littleTreeNode.left);
    } else {
      result = false;
    }
  }
  if (bigTreeNode.right) {
    if (bigTreeNode.right === littleTreeNode.right) {
      isSame(bigTreeNode.right, littleTreeNode.right);
    } else {
      result = false;
    }
  }
  return result;
}

// searches for subtree

const isSubTree = (bigTree, littleTree) => {
  let equalNodes = bigTree.dFSNode(littleTree.root);
  if (equalNodes.length !== 0) {
    for (let bigTreeNode in equalNodes) {
      if (isSame(bigTreeNode, littleTree.root)) {
        return true;
      }
    }
  }
  return false;
}

var node0 = new Node(0);
var node1 = new Node(1);
var node2 = new Node(2);
var node3 = new Node(3);
var node4 = new Node(4);
var node5 = new Node(5);
var node6 = new Node(6);

node3.addLeft(node1);
node1.addLeft(node0);
node1.addRight(node2);

node3.addRight(node5);
node5.addLeft(node4);
node5.addRight(node6);

var tree1 = new BinaryTree(node3);

var node7 = new Node(7)

var tree2 = new BinaryTree(node7);
isSubTree(tree1, tree2);