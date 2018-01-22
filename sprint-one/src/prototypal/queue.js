var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(queueMethods);
  instance.counter = 0;
  instance.storage = {};
  return instance;
};

var queueMethods = {
  // enqueue
  enqueue: function(value) {
    // create k/v property in storage using counter: value
    this.storage[this.counter] = value;
    // add 1 to counter
    this.counter++;
  },
  // dequeue
  dequeue: function() {
    // declare var frontIdx = smallest index
    var frontIdx = Math.min.apply(null, Object.keys(this.storage));
    // var frontVal = this.storage[frontIdx]
    var frontVal = this.storage[frontIdx];
    // delete this.storage[frontIdx]
    delete this.storage[frontIdx];
    // return frontVal
    return frontVal;
  },
  // size
  size: function() {
    return Object.keys(this.storage).length;
  }
};


