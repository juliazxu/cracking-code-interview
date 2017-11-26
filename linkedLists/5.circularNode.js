// 2.5 Given a circular linked list, implement an algorithm which returns node at the beginning
// of the loop.
// DEFINITION
// Circular linked list: A (corrupt) linked list in which a node’s next pointer points to an
// earlier node, so as to make a loop in the linked list.
// EXAMPLE
// input: A -> B -> C -> D -> E -> C [the same C as earlier]
// output: C

// create a set. if the node doesn't exist in the set, add the node
// if the node exists in the set, return that node

const returnLoopStart = linkedList => {
    const nodeSet = new Set();
    let currNode = linkedList.head;
    while (currNode.next) {
        if (nodeSet.has(currNode)) {
            return currNode;
        } {
            nodeSet.add(currNode.value);
            currNode = currNode.next; 
        }
    }
    console.log("no circular node found");
}
  

  
  