function LinkedList(){
    this.head = null
    this.tail = null
}

function Node(value, next, prev){
    this.value = value
    this.next = next
    this.prev = prev
}

var LL = new LinkedList()
console.log(LL)

var nde = new Node(100, 'NextNode', null)
console.log(nde)