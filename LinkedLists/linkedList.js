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
    if (index >= this.length) {
      this.append(value);
      this.length += 1;
      return this.printList();
    }

    const insertingNode = new Node(value);
    const leaderNode = this.traverse(index - 1);
    const nextNode = leaderNode.next;
    leaderNode.next = insertingNode;
    insertingNode.next = nextNode;
    this.length += 1;
    return this.printList();
  }

  remove(index) {
    if (index >= this.length - 1) {
      const leaderNode = this.traverse(this.length - 2);
      leaderNode.next = null;
      this.tail = leaderNode;
      this.length -= 1;
      return this.printList();
    }

    const leaderNode = this.traverse(index - 1);
    const removingNode = leaderNode.next;
    leaderNode.next = removingNode.next;
    this.length -= 1;
    return this.printList();
  }

  traverse(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter < index) {
      currentNode = currentNode.next;
      counter += 1;
    }
    return currentNode;
  }

  reverse() {
    if (!this.head.next) {
      return this.head;
    }
    let first = this.head;
    this.tail = this.head;
    let second = first.next;

    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;

    return this;
  }
}

// console
const myDoublyLinkedList = new LinkedList(10);

console.log(myDoublyLinkedList.append(6));
console.log(myDoublyLinkedList.append(3));
console.log(myDoublyLinkedList.append(2));
console.log(myDoublyLinkedList.prepend(1));
console.log(myDoublyLinkedList.printList());
console.log(myDoublyLinkedList.insert(2, 99));
// console.log(myDoublyLinkedList.remove(6));
// console.log(myDoublyLinkedList.remove(2));
// console.log(myDoublyLinkedList);
console.log(myDoublyLinkedList.reverse());
// console.log(myDoublyLinkedList.printList());
