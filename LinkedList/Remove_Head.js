function LinkedList(){
    this.head = null;
    this.tail = null;
}

function Node(value, next,prev){
    this.value = value;
    this.next = next;
    this.prev = prev;
}

LinkedList.prototype.addToHead = function(value){
    var newNode = new Node(value, this.head, null);
    if(this.head) this.head.next = newNode;
    else this.head = newNode;
    this.tail = newNode;
}

LinkedList.prototype.removeHead = function(){
    if(!this.head) return null;
    var nxtHead = this.head.value;
    this.head = this.head.next;
    if(this.head) this.head.prev = null;
    else this.tail = null;
    return nxtHead;
}

var L = new LinkedList();
L.addToHead(40);
L.addToHead(50);
L.addToHead(60);
console.log(L.removeHead());

