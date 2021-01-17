/** Node: node for a stack. */
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */
  push(val) {
    const node = new Node(val);

    if (this.first === null) {
      this.last = node;
    }
    else {
      this.first.next = node;
    }

    this.first = node;
    this.size++;

    return (undefined);
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */
  pop() {
    if (this.size === 0) {
      throw new Error("Stack is empty.");
    }

    const value = this.first.val;

    if (this.first === this.last) {
      this.first = null;
    }

    this.last = this.last.next;
    this.size--;

    return (value);
  }

  /** peek(): return the value of the first node in the stack. */
  peek() {
    if (this.first === null) {
      throw new Error("Stack is empty.");
    }

    return (this.first.val);
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */
  isEmpty() {
    return (this.first === null);
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

module.exports = Stack;
