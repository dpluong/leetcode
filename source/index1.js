/* eslint-disable max-classes-per-file */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */


class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }

  add(val) {
    const newNode = new ListNode(val);
    this.next = newNode;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(val) {
    const newNode = new ListNode(val);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }
}

const addTwoNumbers = function addTwoNumbers(l1, l2) {
  let x = 0;
  let y = 0;
  let carry = 0;
  let current1 = l1;
  let current2 = l2;
  const l3 = new ListNode(0);
  let current3 = l3;
  while (current1 !== null || current2 !== null) {
    if (current1 !== null || current1.val === 0) { x = current1.val; }
    if (current2 !== null || current2.val === 0) { y = current2.val; }
    const sum = x + y + carry;
    console.log(sum);
    if (sum >= 10) current3.next = new ListNode(sum - 10);
    else current3.next = new ListNode(sum);
    console.log(sum % 10);
    carry = parseInt((sum / 10).toString(10));
    console.log(carry);
    current3 = current3.next;
    if (current1 !== null) { current1 = current1.next; }
    if (current2 !== null) { current2 = current2.next; }
  }
  if (carry === 1) {
    current3.next = new ListNode(1);
  }
  return l3.next;
};

const l1 = new LinkedList();
l1.add(4);
l1.add(3);

const l2 = new LinkedList();
l2.add(6);
l2.add(4);

console.log(addTwoNumbers(l1, l2));
console.log(l2);
