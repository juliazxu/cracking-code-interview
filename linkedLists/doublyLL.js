class Node {
  constructor (val) {
    this.value = val;
    this.next = null;
    this.previous = null;
  }
}

class DoublyList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  
  add(val) {
    var currentNode = this.head;
    
    if (!currentNode) {
      this.head = new Node(val);
      this.length++;
      
      return Node;
    }
    
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    
    currentNode.next = new Node(val);
    
    let nextNode = currentNode.next;
    nextNode.previous = currentNode;
    
    this.length++;
    
    return Node;
  }
}

var dl = new DoublyList();
dl.add(1);
dl.add(2);
dl.add(3);