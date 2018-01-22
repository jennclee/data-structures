
// Instantiate a new graph
var Graph = function() {
  this.nodeList = {};
};


// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  if (this.nodeList[node] === undefined) {
    this.nodeList[node] = [];
  } 
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return Object.keys(this.nodeList).includes(node.toString());
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if (Object.keys(this.nodeList).length > 1) {
    _.each(this.nodeList[node], item => { 
      this.removeEdge(item, node);
    });
  }
  delete this.nodeList[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.nodeList[fromNode].includes(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (this.contains(toNode)) {
    this.nodeList[fromNode].push(toNode);
    this.nodeList[toNode].push(fromNode);
  } else {
    this.addNode(toNode);
    this.addEdge(fromNode, toNode);
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) { 
  var toNodeIdx = this.nodeList[fromNode].indexOf(toNode);
  var fromNodeIdx = this.nodeList[toNode].indexOf(fromNode);
  this.nodeList[fromNode].splice(toNodeIdx, 1);
  this.nodeList[toNode].splice(fromNodeIdx, 1);
 
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  var nodes = Object.keys(this.nodeList);
  _.each(nodes, function(node) {
    cb(node);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
- graph.addNode(node): O(1)
- graph.contains(node): O(n)
- graph.removeNode(node): O(n)
- graph.hasEdge(from, to): O(n)
- addEdge(from, to): O(1)
- removeEdge(from, to): O(n)
- forEachNode(cb): O(n)
 
 */



