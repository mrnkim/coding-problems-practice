"use strict";

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newTail = {
      value: value,
      next: null,
    };
    this.tail.next = newTail;
    this.tail = newTail;
    this.length += 1;

    return this;
  }
}

const myLinkedList = new LinkedList(10);

console.log(myLinkedList.append(6));
console.log(myLinkedList.append(3));
console.log(myLinkedList.append(2));
// console.log(myLinkedList);
