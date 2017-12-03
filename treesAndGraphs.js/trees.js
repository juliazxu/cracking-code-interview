// tree

class Node {
    constructor(val) {
        this.value = val;
        this.children = [];
    }

    changeValue(val) {
        this.value = val;
    }

    addChildren(arrayOfNodes) {
        this.children = this.children.concat(arrayOfNodes);
    }
}

class BinaryTree {
    constructor(node) {
        this.root = node;
    }

    changeRoot(node) {
        this.root = node;
    }
}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);
const node6 = new Node(6);
node1.addChildren([node2, node3]);
node2.addChildren([node4]);
node3.addChildren([node5])
node5.addChildren([node6]);
const balancedTree = new BinaryTree(node1);

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);
const node6 = new Node(6);
node1.addChildren([node2, node3]);
node2.addChildren([node4]);
node4.addChildren([node6]);
const unbalancedTree = new BinaryTree(node1);


// binary tree

class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }

    changeValue(val) {
        this.value = val;
    }

    addToLeft(node) {
        this.left = node;
    }

    addToRight(node) {
        this.right = node;
    }
}

class BinaryTree {
    constructor(node) {
        this.root = new Node(node);
    }

    changeRoot(node) {
        this.root = node;
    }
}