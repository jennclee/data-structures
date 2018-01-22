var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var counter = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    // Add k/v to sorage; counter/value
    storage[counter] = value;
    // add one to counter
    counter++;
  };

  someInstance.pop = function() {
    // Find k/v with largest key
    
    // Create var top and assign to value of k/v pair found
    var topKey = Math.max.apply(null, Object.keys(storage));
    var topValue = storage[topKey];
    // Delete k/v pair and return top
    delete storage[topKey];
    return topValue;
  };

  someInstance.size = function() {
    // create var count = 0
    var count = 0;
    // iterate through storage => w/ each iteration count += 1;
    for (var key in storage) {
      count++;
    }
    // return count
    return count;
  };

  return someInstance;
};
