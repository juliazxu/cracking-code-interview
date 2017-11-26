// 3.5 Implement a MyQueue class which implements a queue using two stacks.

// pop [1, 2, 3]

// [1, 2, 3]
// []

// [1, 2]
// [3]

// [1]
// [3, 2]

// []
// [3, 2]

// [2]
// [3]

// [2, 3]
// []

// keep popping the stack that has things in it until there is 1 left
// return the last thing in it, then pop it
// then pop all elements so they are back in their original order

class MyQueue {
    constructor() {
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }
    
    enqueue(ele) {
        const currStack = this.stack1.size !== 0 ? this.stack1 : this.stack2;
        currStack.push(ele);
    }
    
    dequeue() {
        if (this.stack1.size === 0 && this.stack2.size === 0) {
            console.log('MyQueue is already empty.');
            return;
        }
        const currStack = this.stack1.size !== 0 ? this.stack1 : this.stack2;
        const emptyStack = this.stack1.size === 0 ? this.stack1 : this.stack2;
        while (currStack.size > 1) {
            const ele = currStack.pop();
            emptyStack.push(ele);
        }
        const firstItemInQueue = currStack.pop();
        while (emptyStack.size > 0) {
            const ele = emptyStack.pop();
            currStack.push(ele);
        }
        return firstItemInQueue;
    }
}

var queue1 = new MyQueue();
queue1.enqueue(1);
queue1.enqueue(2);
queue1.enqueue(3);
queue1.dequeue();
queue1.enqueue(4);
queue1.dequeue();