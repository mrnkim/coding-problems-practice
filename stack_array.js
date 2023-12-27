"use strict";

class Stack {
  constructor() {
    this.array = [];
  }

  peek() {
    return this.array[this.array.length - 1];
  }

  push(value) {
    this.array.push(value);
  }

  pop() {
    this.array.pop();
  }

  isEmpty() {
    return this.array.length === 0;
  }
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
console.log(stack.isEmpty());
