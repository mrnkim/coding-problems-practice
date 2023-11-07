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

    newTail.previous = this.tail;
    this.tail.next = newTail;
    this.tail = newTail;
    this.length += 1;

    return this;
  }

  prepend(value) {
    const newHead = new Node(value);

    newHead.next = this.head; //새 node부터 순서대로 꼬리에 꼬리를 물듯이...
    this.head.previous = newHead;
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
    const followingNode = leaderNode.next;

    leaderNode.next = insertingNode;
    insertingNode.previous = leaderNode;
    insertingNode.next = followingNode;
    followingNode.previous = insertingNode;
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
    const followingNode = removingNode.next;
    leaderNode.next = followingNode;
    followingNode.previous = leaderNode;
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

// Tests
const myDoublyLinkedList = new DoublyLinkedList(10);
console.log(myDoublyLinkedList.printList());
console.log(myDoublyLinkedList.append(6));
console.log(myDoublyLinkedList.printList());
console.log(myDoublyLinkedList.prepend(1));
console.log(myDoublyLinkedList.printList());
console.log(myDoublyLinkedList.insert(2, 99));
console.log(myDoublyLinkedList.remove(2));
console.log(myDoublyLinkedList.traverse(2));
console.log(myDoublyLinkedList.printList());
