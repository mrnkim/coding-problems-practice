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

  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
    } else {
      if (newNode.value > this.root.value) {
        this.root.right = newNode;
      } else if (newNode.value < this.root.value) {
        this.root.left = newNode;
      } 
    }
  }

  lookup(value) {}

  //remove
}
