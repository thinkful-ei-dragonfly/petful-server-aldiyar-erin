/* eslint-disable strict */
class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new _Node(data);

    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      // this.last.next = node;
      node.next = this.last;
      this.last.prev = node;
    }
    this.last = node;
  }

  dequeue() {
    // if queue is empty, there is nothing to return
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = node.prev;
    //if this is the last item in the queue
    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }
}

function peek(queue) {
  if (queue.first === null) {
    return null;
  } else {
    return queue.first.value;
  }
}

function isEmpty(queue) {
  return queue.first === null;
}

// function display(queue) {
//   while (queue.first !== null) {
//     console.log(queue.first.value);
//     queue.first = queue.first.next;
//   }
// }

module.exports = Queue;