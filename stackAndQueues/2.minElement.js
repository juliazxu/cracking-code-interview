// 3.2 How would you design a stack which, in addition to push and pop, also has a function
// min which returns the minimum element? Push, pop and min should all operate in
// O(1) time.

// create another array that keeps track of the position of the minimum number

class Stack {
    constructor() {
        this.size = 0,
        this.data = [],
        this.minNumArray = [],
        this.minNumArraySize = 0;
    }

    push(num) {
        this.data[this.size] = num;
        this.size++;
        if (this.minNumArraySize === 0 || num < this.minNumArray[this.minNumArraySize - 1]) {
            this.minNumArray[this.minNumArraySize] = num;
            this.minNumArraySize++;
        }
    }

    pop() {
        if (this.size === 0) {
            console.log("Stack is empty.");
            return;
        }
        const currElement = this.data[this.size - 1];
        delete this.data[this.size - 1];
        this.size--;
        if (currElement === this.minNumArray[this.minNumArraySize - 1]) {
            delete this.minNumArray[this.minNumArraySize - 1];
            this.minNumArraySize--;
        }
        return currElement;
    }

    returnMinElement() {
        if (this.size === 0) {
            console.log("Stack is empty.");
            return;
        }
        return this.minNumArray[this.minNumArraySize - 1];
    }

}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.returnMinElement();
stack.push(0);
stack.returnMinElement();
stack.pop();
stack.pop();
stack.returnMinElement();
stack.pop();
stack.returnMinElement();