var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.counter = 0;
  this.storage = {};
};

Stack.prototype.push = function(value) {
  this.storage[this.counter] = value;
  this.counter++;
};
Stack.prototype.pop = function() {
  var topIdx = this.counter - 1;
  var topValue = this.storage[topIdx];
  delete this.storage[topIdx];
  this.counter--;
  return topValue;
};
Stack.prototype.size = function() {
  return Object.keys(this.storage).length;
};

