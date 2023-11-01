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
}

// console
const myLinkedList = new LinkedList(10);

console.log(myLinkedList.append(6));
console.log(myLinkedList.append(3));
console.log(myLinkedList.append(2));
console.log(myLinkedList.prepend(1));
console.log(myLinkedList.prepend(1));
console.log(myLinkedList.printList());
console.log(myLinkedList.insert(2, 99));
console.log(myLinkedList.remove(6));
console.log(myLinkedList.remove(2));
