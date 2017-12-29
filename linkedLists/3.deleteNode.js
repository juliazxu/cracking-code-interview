// 2.3 Implement an algorithm to delete a node in the middle of a single linked list, given
// only access to that node.
// EXAMPLE
// Input: the node ‘c’ from the linked list a->b->c->d->e
// Result: nothing is returned, but the new linked list looks like a->b->d->e

// keep track of previousNode, currentNode, and nextNode
// if currentNode is the desired node, then set previousNode.next = nextNode;

// or just find the node before the node to be deleted
// then set its next node to be the next next node instead, skipping over that node

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }

  addNextNode(node) {
    this.next = node;
  }
}

class SinglyList {
  constructor(node) {
    this.head = node;
  }
}

const deleteNode = (nodeToDelete, linkedList) => {
  let currNode = linkedList.head;
  while (currNode && currNode.next !== nodeToDelete) {
    currNode = currNode.next;
    if (!currNode) { console.log("Node not found in list.") }
  }
  currNode.next = currNode.next.next;
}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);

node1.addNextNode(node2);
node2.addNextNode(node3);
node3.addNextNode(node4);

const list1 = new SinglyList(node1);

deleteNode(node3, list1);