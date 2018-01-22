var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {counter: 0, storage: {}};
  _.extend(instance, stackMethods);
  return instance;
};

var stackMethods = {
  //push
  push: function(val) {
    // create k/v in storage using counter:val
    this.storage[this.counter] = val;
    // increase counter by 1
    this.counter++;
  },
  
  // pop
  pop: function() {
    // create var lastIdx = largest key
    var lastIdx = Math.max.apply(null, Object.keys(this.storage));
    // create var lastItem = storage[lastIdx]
    var lastItem = this.storage[lastIdx];
    //delete storage[lastIdx];
    delete this.storage[lastIdx];
    // return lastItem
    return lastItem;
  }, 
  
  // size
  size: function() {
    return Object.keys(this.storage).length;
  }
};


