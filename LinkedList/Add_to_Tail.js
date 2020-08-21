function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}

LinkedList.prototype.addToTail = function(value){
    var newNode = new Node(value, null, this.tail);
    if(this.tail) this.tail.next = newNode;
    else this.tail = newNode;
    this.head = newNode;
}

var LL = new LinkedList();
LL.addToTail(100);
LL.addToTail(400);
console.log(LL);
