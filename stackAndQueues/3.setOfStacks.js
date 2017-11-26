// 3.3 Imagine a (literal) stack of plates. If the stack gets too high, it might topple. Therefore,
// in real life, we would likely start a new stack when the previous stack exceeds
// some threshold. Implement a data structure SetOfStacks that mimics this. SetOfStacks
// should be composed of several stacks, and should create a new stack once
// the previous one exceeds capacity. SetOfStacks.push() and SetOfStacks.pop() should
// behave identically to a single stack (that is, pop() should return the same values as it
// would if there were just a single stack).
// FOLLOW UP
// Implement a function popAt(int index) which performs a pop operation on a specific
// sub-stack.

// constructor: size, maxStackSize num, allStacks array
// push: check to see if the last stack is full or not. If not, push. If yes, create a new stack and push.
// pop: check to see if the last stack has 1 element. If not, pop. If yes, delete that stack and return the val
// popAt: not sure if what it's asking for. Is it the index of the element or the stack?
// If it pops on a sub-stack, does it shift the entire set of stacks?

class SetOfStacks {
    constructor() {
      this.size = 0;
      this.maxStackSize = 3;
      this.allStacks = [];
    }
    
    push(ele) {
        if (this.allStacks.length === 0 || this.allStacks[this.allStacks.length - 1].size >= this.maxStackSize) {
            let newStack = new Stack();
            newStack.push(ele);
            this.allStacks[this.allStacks.length] = newStack;
        }
        else {
            this.allStacks[this.allStacks.length - 1].push(ele);
        }
        this.size++;
    }
    
    pop() {
        const currStack = this.allStacks[this.allStacks.length - 1];
        if (this.allStacks.length === 0) {
            console.log('Set of stacks is empty.');
            return;
        } else if (currStack.size === 1) {
            const currVal = currStack.pop();
            this.allStacks.pop();
            this.size--;
            return currVal;
        } else {
            this.size--;
            return currStack.pop();
        }
    }
    
    popAt(num) {
        if (!this.allStacks[num - 1]) {
            console.log('That stack does not exist.');
            return;
        } else {
            this.size--;
            return this.allStacks[num - 1].pop();
        }
    }
}

let newStack = new SetOfStacks();
newStack.push(0);
newStack.push(1);
newStack.push(2);
newStack.push(3);
newStack.pop();
newStack.pop();