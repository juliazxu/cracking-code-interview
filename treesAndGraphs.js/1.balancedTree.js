// 41 Implement a function to check if a tree is balanced 
// For the purposes of this question, 
// a balanced tree is defined to be a tree such that no two leaf nodes 
// differ in distance from the root by more than one

// Approach 1

// find all leaf nodes and store their distance from the root using breadth first search
// if distance > 1 compared to any other node, then return false
// if not, return true

const findLeafNodeLevels = tree => {
    let level = 0;
    let currentNodes = [tree.root];
    let currentNodeChildren = [];
    const leafNodeLevels = [];
    while (currentNodes.length > 0) {
        for (let node of currentNodes) {
            if (!node.children || node.children.length === 0) {
                leafNodeLevels.push(level);
            } else {
                currentNodeChildren = currentNodeChildren.concat(node.children);
            }
        }
        level++;
        currentNodes = currentNodeChildren;
        currentNodeChildren = [];    
    }
    return leafNodeLevels;
}

const isTreeBalanced = tree => {
    if (!tree.root) {
        console.log('Tree is empty.');
        return;
    } else if (tree.root.children.length === 0) {
        console.log('Tree only has one leaf node, the root.');
        return;
    } else {
        let leafNodeLevels = findLeafNodeLevels(tree).sort();
        let result = null;
        leafNodeLevels[leafNodeLevels.length - 1] - leafNodeLevels[0] > 1 ? result = false : result = true ;
        return result;
    }
}

isTreeBalanced(balancedTree);

// Approach 2 use recursion

const leafNodeLevels = [];

const findLeafNodeLevels = (nodes, level) => {
    for (let node of nodes) {
        if (node.children.length === 0) {
            leafNodeLevels.push(level);
        } else {
            findLeafNodeLevels(node.children, level + 1);
        }
    }
    return leafNodeLevels;
}

const isTreeBalanced = tree => {
    console.log(tree.root);
    if (!tree.root) {
        console.log('Tree is empty.');
        return;
    } else if (tree.root.children.length === 0) {
        console.log('Tree only has one leaf node, the root.');
        return;
    } else {
        let leafNodeLevels = findLeafNodeLevels([tree.root], 0).sort();
        console.log(leafNodeLevels);
        let result = null;
        leafNodeLevels[leafNodeLevels.length - 1] - leafNodeLevels[0] > 1 ? result = false : result = true ;
        return result;
    }
}

isTreeBalanced(balancedTree);