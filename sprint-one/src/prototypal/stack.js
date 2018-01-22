var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(stackMethods);
  instance.storage = {};
  instance.counter = 0;
  return instance;
};

var stackMethods = {
  // push
  push: function(value) {
    // set key:value (counter: value) in storage
    this.storage[this.counter] = value;
    // increase counter by 1
    this.counter++;
  },
  // pop
  pop: function() {
    // declare variable topIdx that stores the largest key of storage
    var topIdx = Math.max.apply(null, Object.keys(this.storage));
    // declare variable topValue that stores the value of the k/v/p of largest key
    var topValue = this.storage[topIdx];
    // delete the k/v/p from storage of topIdx
    delete this.storage[topIdx];
    // return topValue
    return topValue;
  },
  // size
  size: function() {
    return Object.keys(this.storage).length;
  }
};




