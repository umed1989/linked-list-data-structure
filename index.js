//Node constructor consisting of 2 properties. Data and Next. Next is the reference to the next Node
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
//Linked List constructor consisting of head property
class LinkedList {
  constructor() {
    this.head = null;
  }
  //first method which inserts first Node
  insertFirst(data) {
    const node = new Node(data, this.head);
    //indicate the head to the new node
    this.head = node;
  }
  //second method returning the size of the Linked List
  size() {
    //every time looping through Nodes we will add +1 to our counter variable
    let counter = 0;
    //we begin counting from the head property of our Linked List
    let node = this.head;
    //as long as "node" is true
    while (node) {
      //add counter by 1
      counter++;
      //and reassign node to the next node
      node = node.next;
    }

    return counter;
  }

  getFirst() {
    //show the first node where the "head" property is indicated
    return this.head;
  }

  getLast() {
    //if there is not head propery return null
    if (!this.head) {
      return null;
    }
    //otherwise assign head property to the variable node
    let node = this.head;
    //and as long as node or head property is true, loop through all nodes
    while (node) {
      //if the node is not indicationg to the next node
      if (!node.next) {
        //return the node which is the last one
        return node;
      }
      //go to the next node
      node = node.next;
    }
  }
  //clear
  clear() {
    this.head = null;
  }
  //remove first node
  removeFirst() {
    //if there is not head property
    if (!this.head) {
      return;
    }
    //return the second Node
    return this.head.next;
  }
  //remove the last node
  removeLast() {
    if (!this.head) {
      return;
    }
    //if there is only one Node
    if (!this.head.next) {
      this.head = null;
      return;
    }

    let previous = this.head;
    let node = this.head.next;
    //as long as Node has "next" property, whick means indicating the next Node
    while (node.next) {
      //assign the previous Node to the next one
      previous = node;
      node = node.next;
    }
    //after finding the last one, remove it!
    previous.next = null;
  }

  insertLast(data) {
    //use the function whick returns the last Node
    const last = this.getLast();
    //if it exists
    if (last) {
      //insert the new Node after the last one
      last.next = new Node(data);
    } else {
      //otherwise insert the new Node as a first Node
      this.head = new Node(data);
    }
  }

  getAt(index) {
    let node = this.head;
    let counter = 0;
    //loop through all the Nodes
    while (node) {
      //and add counter by "1" by each Node,                                                                                          and if there is a match between given index and node return that Node!!!
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }
    //if the head is empty return 'null'
    return null;
  }

  removeAt(index) {
    if (!this.head) {
      return null;
    }

    if (index === 0) {
      //refer the head to the second Node when the index is '0', which means the first one!!!
      this.head = this.head.next;
      return;
    }

    const previous = this.getAt(index - 1);
    //if there is not previuos Node and current Node return nothing!!!
    if (!previous || !previous.next) {
      return;
    }
    //remove the current Node
    previous.next = previous.next.next;
  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }
    //if one of following functions return true, assign it to 'previous' variable
    const previous = this.getAt(index - 1) || this.getLast();
    //create a new Node
    const node = new Node(data, previous.next);
    //and insert it after the 'previous' variable                                                                                 (in this case it can be the last Node or the one before given index)
    previous.next = node;
  }
}

module.exports = { Node, LinkedList };
