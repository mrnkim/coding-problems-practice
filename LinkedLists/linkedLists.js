"use strict";
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  printList() {
    const array = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return array;
  }

  append(value) {
    const newTail = new Node(value);

    this.tail.next = newTail;
    this.tail = newTail;
    this.length += 1;

    return this;
  }

  prepend(value) {
    const newHead = new Node(value);

    newHead.next = this.head;
    this.head = newHead;
    this.length += 1;

    return this;
  }

  insert(index, value) {
    const newNode = new Node(value);
    let currNode = this.head;
    let nextNode = currNode.next;

    while (i <= index) {
      currNodeIndex = 0;
      currNode.next = 
    }

  }
}

// console
const myLinkedList = new LinkedList(10);

console.log(myLinkedList.append(6));
console.log(myLinkedList.append(3));
console.log(myLinkedList.append(2));
console.log(myLinkedList.prepend(1));
console.log(myLinkedList.printList());
