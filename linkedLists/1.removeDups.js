// Write code to remove duplicates from an unsorted linked list.
// FOLLOW UP
// How would you solve this problem if a temporary buffer is not allowed?

// add data of every node to a set
// if data already exists, then remove that node and connect the previous and next nodes

const removeDups = doublyList => {
    const valueSet = new Set();
    let currNode = doublyList.head;
    
    while (currNode) {
      if (valueSet.has(currNode.value)) {
        console.log('removing this node', currNode.value, "in", valueSet);
        let prevNode = currNode.previous;
        let nextNode = currNode.next;
        if (nextNode) {
          nextNode.previous = prevNode;
          prevNode.next = nextNode;
        } else {
          prevNode.next = null;
        }
        console.log(currNode, doublyList);
        doublyList.length--;
      } else {
        valueSet.add(currNode.value);
        console.log(currNode, doublyList);
      }
      currNode = currNode.next;
    }
}