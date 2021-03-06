class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

BST.prototype.insert = function (value) {
  if (!this.value) this.value = new BST(value);
  else if (value <= this.value)
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
var bst = new BST(50);
bst.insert(60);
bst.insert(40);
console.log(bst);
console.log(bst.contains(30))
