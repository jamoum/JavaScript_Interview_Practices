class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

BST.prototype.insert = function (value) {
  if (value <= this.value)
    if (!this.left) this.left = new BST(value);
    else this.left.insert(value);
  else if (value > this.value)
    if (!this.right) this.right = new BST(value);
    else this.right.insert(value);
};

BST.prototype.contains = function (value) {
  if (value === this.value) return true;
  else if (value < this.value)
    if (!this.left) return false;
    else return this.left.contains(value);
  else if (value > this.value)
    if (!this.right) return false;
    else return this.right.contains(value);
};

// InOrder depth First Traversal ==> Left-> Data -> Right ==> InOrder is sorted

BST.prototype.depthFirstTraversalInOrder = function (iteratorFunction) {
  if (this.left) this.left.depthFirstTraversalInOrder(iteratorFunction);
  iteratorFunction(this.value);
  if (this.right) this.right.depthFirstTraversalInOrder(iteratorFunction);
};

// PreOder depth First Traversal ==> Data -> Left -> Right

BST.prototype.depthFirstTraversalPreOrder = function (iteratorFunction){
  iteratorFunction(this.value);
  if(this.left) this.left.depthFirstTraversalPreOrder(iteratorFunction);
  if(this.right) this.right.depthFirstTraversalPreOrder(iteratorFunction);
}

// PostOder depth First Traversal ==>   Left -> Right -> Data

BST.prototype.depthFirstTraversalPostOrder = function (iteratorFunction){
  if(this.left) this.left.depthFirstTraversalPostOrder(iteratorFunction);
  if(this.right) this.right.depthFirstTraversalPostOrder(iteratorFunction);
  iteratorFunction(this.value);
}


function iteratorFunction(value){
  console.log(value);
}

var bst = new BST(20);
console.log(bst);
bst.insert(15);
bst.insert(13);
bst.insert(18);
bst.insert(25);
bst.insert(30);
console.log(bst);
console.log(bst.contains(60));

console.log("-------- InOder Traversal ----------");
bst.depthFirstTraversalInOrder(iteratorFunction);
console.log("-------- PreOder Traversal ----------");
bst.depthFirstTraversalPreOrder(iteratorFunction);
console.log("-------- PostOder Traversal ----------");
bst.depthFirstTraversalPostOrder(iteratorFunction);
