var BinarySearchTree = function(value) {
  var newTree = {
    value,
    left: null,
    right: null
  };
  
  _.extend(newTree, BinarySearchTree.prototype);
  
  return newTree;
};

BinarySearchTree.prototype = {};

BinarySearchTree.prototype.insert = function(insertValue) {
  if ( insertValue < this.value ) {
    if (!this.left) {
      this.left = BinarySearchTree(insertValue);
    } else {
      this.left.insert(insertValue);
    }
  } else if ( insertValue > this.value ) {
    if (!this.right) {
      this.right = BinarySearchTree(insertValue);
    } else {
      this.right.insert(insertValue);
    }
  }
};

BinarySearchTree.prototype.contains = function(value) {
  // compare value of head search tree to value
  if (value === this.value) {
    // if value === tree.value retrun true
    return true;
  } else if (value < this.value) {
    // else if value < tree.value
      // if tree.left !== null then
    if (this.left) {
        // true => call contains of tree.left
      return this.left.contains(value);
    } else {
      // else return false;
      return false;
    }
    // else  => 
  } else {
      //if tree.right !== null then 
    if (this.right) {
        // call contains of tree.right
      return this.right.contains(value);
    } else {
      // else return false;
      return false;
    }
  }
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  // call cb on tree.value
  cb(this.value);
  // if tree.left then call depthFirstLog(cb) on tree.left
  if (this.left) {
    this.left.depthFirstLog(cb);
  } 
  // if tree.right then call depthFirstLog(cb) on tree.right
  if (this.right) {
    this.right.depthFirstLog(cb);
  }
};

BinarySearchTree.prototype.breadthFirstLog = function(cb) {
  // create treeArr to store tree nodes
  var treeArr = [];
  
  treeArr.push(this);
  
  // declare private function traverseTree with input of a tree node
  var traverseTree = function(tree, cb) {
    // call cb(input)
    cb(tree.value);
    // if !!input.left, push to treeArr
    if ( tree.left ) { 
      treeArr.push(tree.left);
    }
    // if !!input.right, push to treeArr
    if ( tree.right ) {
      treeArr.push(tree.right);
    }
  };
  // loop through treeArr
  for (var i = 0; i < treeArr.length; i++) {
    // call traverseTree on each node of treeArr
    traverseTree(treeArr[i], cb);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 - insert(value): O(1)
 - contains(value): O(log(n))
 - depthFirstLog(cb): O(n)
 */
