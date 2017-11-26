// 2.2 Implement an algorithm to find the nth to last element of a singly linked list.

// iterate through the linked list until you reach the element that is length - n from the head

const findNthLast = (nthLastPosition, singlyList) => {
    let currPosition = 1;
    const position = singlyList.length - nthLastPosition;
    let currNode = singlyList.head;
    while (currPosition < position) {
      currNode = currNode.next;
      currPosition++;
    }
    
    return currNode;
}