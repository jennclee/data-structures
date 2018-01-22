

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // If there is no bucket, create a bucket using set
  if (this._storage.get(index) === undefined) {
    this._storage.set(index, []);
  }
  // Use get to return bucket and store as var
  var bucketRef = this._storage.get(index);
  var targetIdx = -1;
  // Loop through bucketRef
  for (var i = 0; i < bucketRef.length; i++) {
    // For each tuple in bucketRef, index[0] === k
    if (bucketRef[i][0] === k) {
      // if true, index[1] = v
      targetIdx = i;
    }
  }
  if (targetIdx >= 0) {
    bucketRef[targetIdx][1] = v;
  } else {
    // Add tuple to bucket
    bucketRef.push([k, v]);
  }
  
  // Use set to reassign new bucket
  this._storage.set(index, bucketRef);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // create var bucketRef by passing index into this._storage.get(index)
  var bucketRef = this._storage.get(index);
    // loop through tuples of hash[idx]
  for (var i = 0; i < bucketRef.length; i++) {
    // if tuple[0] === k, return tuple[1]
    if (bucketRef[i][0] === k) {
      return bucketRef[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // get bucket using the index and using get
  var bucketRef = this._storage.get(index);
  // create var for storing tuple index
  var targetIdx = -1;
  // loop through bucket to get tuples
  for (var i = 0; i < bucketRef.length; i++) {
    // if tuple[0] === k then reassign tupleIdx variable to i
    if (bucketRef[i][0] === k) {
      targetIdx = i;
    }
  }
  // if tupleIdx
  if (targetIdx >= 0) {
    // remove tuple from bucket using splice
    bucketRef.splice(targetIdx, 1);
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
  - .insert(key, value): O(n)
  - .retrieve(k): O(n)
  - remove(k): O(n)
 */


