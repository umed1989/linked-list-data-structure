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
}

module.exports = { Node, LinkedList };
