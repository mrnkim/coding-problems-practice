class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const currentLast = this.last;
      currentLast.next = newNode;
      this.last = newNode;
    }
    this.length += 1;
    return this;
  }

  dequeue() {
    if (this.length === 0) {
      return null;
    } else if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      const currentFirst = this.first;
      this.first = currentFirst.next;
    }
    this.length -= 1;
    return this;
  }
}

const myQueue = new Queue();
myQueue.enqueue("Joy");
myQueue.enqueue("Matt");
myQueue.enqueue("Pavel");
console.log(myQueue);
console.log(myQueue.peek());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
