class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function printTree(root) {
    if (root == null) {
        return;
    }
    printTree(root.left);
    console.log(root.data);
    printTree(root.right);
}

let t1 = new TreeNode(1);
t1.left = new TreeNode(2);
t1.right = new TreeNode(3);
printTree(t1);