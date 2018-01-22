var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {counter: 0, storage: {}};
  _.extend(instance, queueMethods);
  return instance;
};

var queueMethods = {
  // Enqueue
  enqueue: function(value) {
    // make k/v/p and add it to the storage object
    this.storage[this.counter] = value;
    // increase counter
    this.counter++;
  },
  
  // Dequeue
  dequeue: function() {
    // Declare var smallestKey = smallest key
    var smallestKey = Math.min.apply(null, Object.keys(this.storage));
    // Declare var front = storage[smallestKey]
    var front = this.storage[smallestKey];
    // Delete storage[smallestKey]
    delete this.storage[smallestKey];
    // Return front
    return front;
  },
  
  // Size
  size: function() {
    // create var count = 0
    var count = Object.keys(this.storage).length;
    return count;
  }
};


