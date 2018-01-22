var Set = function() {
  var set = Object.create(setPrototype);
  // set._storage = []; // fix me
  set._storage = {};
  set.counter = true;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage[item] = this.counter;
};

setPrototype.contains = function(item) {
  return !!this._storage[item];
};

setPrototype.remove = function(item) {
  if (!this._storage.hasOwnProperty(item)) {
    return 'Value not found';
  } 
  
  delete this._storage[item];
};


/*
 * Complexity: What is the time complexity of the above functions?  
 
 - add(item): O(n)
 - contains(item): O(n)
 - remove(item): O(n)
 
 Complexity: What is the time complexity of the above functions after we make time complexity constant?  
 - add(item): O(1)
 - contains(item): O(1)
 - remove(item): O(1)
 
 */
