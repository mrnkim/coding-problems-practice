"use strict";

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode; //bottom stays the same and always pointing null as next!
    } else {
      const currentTop = this.top;
      this.top = newNode;
      this.top.next = currentTop;
    }
    this.length += 1;
    return this;
  }

  pop() {
    if (!this.top) {
      return null;
    }

    if (this.length === 1) {
      this.bottom = null;
    }

    this.top = this.top.next;
    this.length -= 1;
  }

  isEmpty() {}
}

const stack = new Stack();
stack.push("google");
stack.push("facebook");
stack.push("udemy");
console.log(stack);
console.log("peek= ", stack.peek());
stack.pop();
console.log(stack);
stack.pop();
console.log(stack);
stack.pop();
console.log(stack);
