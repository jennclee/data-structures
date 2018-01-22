var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  _.extend(newTree, treeMethods);
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.countChildren = function() {
  // set var numChildren to 0
  var tree = this;
  var numChildren = 0;
  var childrensChildren = function(tree) { 
  // create recursive function that adds length of children array to children var
    numChildren += tree.children.length;
    if ( tree.children.length > 0 ) {
      for ( var i = 0; i < tree.children.length; i++ ) {
        // calls itself on all its children
        childrensChildren(tree.children[i]);
      }
    }
    return undefined;
  };
  // call function on tree
  childrensChildren(tree);
  return numChildren; 
};

treeMethods.addChild = function(value) {
  var childTree = Tree(value);
  this.children.push(childTree);
};

treeMethods.contains = function(target) {
  // debugger;
  var result = false;
  
  var recurse = function(target, tree) {
    if (target === tree.value) {
      result = true;
    } else if (tree.children.length >= 0) {
      _.each(tree.children, function(child) {
        recurse(target, child);
      });
    } 
  };
  recurse(target, this);
  return result;
};



/*
 * Complexity: What is the time complexity of the above functions?
    - tree.addChild(val): O(1)
    - tree.contains(val): O(n)
 */
