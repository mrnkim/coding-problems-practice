"use strict";
class Node {
  constructor(value) {
    this.value = value;
    this.previous = null;
    this.next = null;
  }
}
class DoublyLinkedList {
  constructor(value) {
    this.head = new Node(value);
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
    newTail.previous = this.tail;

    this.length += 1;

    return this;
  }

  prepend(value) {
    const newHead = new Node(value);

    this.head.previous = newHead;
    newHead.next = this.head;
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
    const followingNode = leaderNode.next;

    leaderNode.next = insertingNode;
    followingNode.previous = insertingNode;
    insertingNode.previous = leaderNode;
    insertingNode.next = followingNode;
    this.length += 1;
    return this.printList();
  }

  remove(index) {
    if (index >= this.length - 1) {
      const leaderNode = this.traverse(this.length - 2);
      leaderNode.next = null;
      this.length -= 1;
      return this.printList();
    }

    const leaderNode = this.traverse(index - 1);
    const removingNode = leaderNode.next;
    leaderNode.next = removingNode.next;
    removingNode.previous = leaderNode;
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
}

// console
const myDoublyLinkedList = new DoublyLinkedList(10);
console.log(myDoublyLinkedList.printList());

console.log(myDoublyLinkedList.append(6));
console.log(myDoublyLinkedList.printList());
console.log(myDoublyLinkedList.prepend(1));
console.log(myDoublyLinkedList.printList());
console.log(myDoublyLinkedList.prepend(1));
console.log(myDoublyLinkedList.printList());
console.log(myDoublyLinkedList.insert(2, 99));
console.log(myDoublyLinkedList.remove(6));
console.log(myDoublyLinkedList.remove(2));
