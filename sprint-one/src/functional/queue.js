var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[counter] = value;
    counter++;
  };

  someInstance.dequeue = function() {
    var smallestKey;
    for (var key in storage) {
      if (smallestKey === undefined) {
        smallestKey = key;
      }
      
      // iterate to next key, compare with smallestKey
      if (key > smallestKey) {
        // if key > smallestKey => nothing
        continue;
      } else {
        // if key < smallestKey => smallestKey = key;
        smallestKey = key;
      }
    }
    
    var front = storage[smallestKey];
    delete storage[smallestKey];
    
    return front;
    
  };

  someInstance.size = function() {
    var count = 0;
    for (var key in storage) {
      count++;
    }
    return count;
  };

  return someInstance;
};
