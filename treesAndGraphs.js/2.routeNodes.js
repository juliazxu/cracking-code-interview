// 42 Given a directed graph, design an algorithm to find out 
// whether there is a route between two nodes

// create some example directed graphs
// find if node1 and node2 connect
// keep a list of nodes checked and nodes to check
// watch out for circular paths
// have to check starting from node1 and node2

class Node {
    constructor(val, pointers) {
        this.value = val;
        this.pointers = [];
    }

    addPointers(pointersArr) {
        this.pointers = pointersArr;
    }
}

// iteratively

const checkRoute = (startNode, endNode) => {
    const nodesChecked = [];
    const nodesToCheck = [startNode];
    const currentNode = nodesToCheck[0];
    while (nodesToCheck.length > 0) {
        if (currentNode.pointers.length !== 0) {
            if (currentNode.pointers.includes(endNode)) {
                return true;
            } else {
                // only add the pointer nodes to nodesToCheck if it hasn't already been checked
                for (let node in currentNode.pointers) {
                    if (!nodesChecked.includes(node)) {
                        nodesToCheck.push(node);
                    }
                }
            }
        }
        nodesChecked.push(nodesToCheck.shift());
    }
    return false;
}

// recursively
const nodesChecked = [];

const checkRoute = (startNode, endNode) => {
    let result = false;
    if (startNode.pointers && startNode.pointers.includes(endNode)) {
        result = true;
        console.log('this worked omg whyyyy');
        return result;
    } else {
        nodesChecked.push(startNode);
        if (startNode.pointers) {
            for (let node of startNode.pointers) {
                checkRoute(node, endNode);
            }
        }
    }
    return result;
}

const isRoute = (node1, node2) => {
    let result = null;
    if (checkRoute(node1, node2)) {
        console.log('this worked');
        result = true;
    } else {
        // check the direction direction
        result = checkRoute(node2, node1);
    }
    console.log(checkRoute(node1, node2), checkRoute(node2, node1));
    return result;
    // if you don't care about time, then:
    // return checkRoute(node1, node2) || checkRoute(node2, node1)
}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);
const node6 = new Node(6);
const node7 = new Node(7);
const node8 = new Node(8);

node1.addPointers([node2, node3]);
node2.addPointers([node5]);
node3.addPointers([node4, node6]);
node4.addPointers([]);
node5.addPointers([node6]);
node6.addPointers([node7]);
node7.addPointers([node8]);
node8.addPointers([]);
isRoute(node1, node8);