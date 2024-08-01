class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }  
}      

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    //     Create a new node
    // Starting at the root
    // Check if there is a root, if not - the root now becomes that new node!
    // If there is a root, check if the value of the new node is greater than or less than the value of the root
    // If it is greater 
    // Check to see if there is a node to the right
    // If there is, move to that node and repeat these steps
    // If there is not, add that node as the right property
    // If it is less
    // Check to see if there is a node to the left
    // If there is, move to that node and repeat these steps
    // If there is not, add that node as the left property
    insert(value) {
        var newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while (true) {
            if (value === current.value) return undefined;
            if (value < current.value) {
                if (current.left === null) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }

    //     Starting at the root
    // Check if there is a root, if not - we're done searching!
    // If there is a root, check if the value of the new node is the value we are looking for.If we found it, we're done!
    // If not, check to see if the value is greater than or less than the value of the root
    // If it is greater 
    // Check to see if there is a node to the right
    // If there is, move to that node and repeat these steps
    // If there is not, we're done searching!
    // If it is less
    // Check to see if there is a node to the left
    // If there is, move to that node and repeat these steps
    // If there is not, we're done searching!
    find(value) {
        if (this.root === null) return false;
        var current = this.root,
            found = false;
        while (current && !found) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                found = true;
            }
        }
        if (!found) return undefined;
        return current;
    }

    contains(value) {
        if (this.root === null) return false;
        var current = this.root,
            found = false;
        while (current && !found) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }

    BFS() {//Breadth-first Search
        var node = this.root,
            data = [],
            queue = [];
        queue.push(node);

        while (queue.length) {
            node = queue.shift();
            data.push(node.value);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return console.log(data);
    }
    DFSPreOrder() {//Depth-first Search
        var data = [];
        function traverse(node) {
            data.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return console.log(data);
    }
    DFSPostOrder() {
        var data = [];
        function traverse(node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            data.push(node.value);
        }
        traverse(this.root);
        return console.log(data);
    }
    DFSInOrder() {
        var data = [];
        function traverse(node) {
            if (node.left) traverse(node.left);
            data.push(node.value);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return console.log(data);
    }

    print(node = this.root, spaceCnt = 0, spaceIncr = 10) {
        if (!node) {
            return;
        }

        spaceCnt += spaceIncr;
        this.print(node.right, spaceCnt);

        console.log(
            " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
            `${node.value}`
        );

        this.print(node.left, spaceCnt);
    }
}


//      10
//   5     13
// 2  7  11  16

var tree = new BinarySearchTree();
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)
tree.print()
tree.BFS()
tree.DFSPreOrder();
tree.DFSPostOrder();
tree.DFSInOrder();
