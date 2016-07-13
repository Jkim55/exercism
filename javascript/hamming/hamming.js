function Hamming(){};

Hamming.prototype.compute = function(first, second){
  if (first.length !== second.length){
    throw new Error('DNA strands must be of equal length.')
  }
  var difference = 0
  for (i = 0; i < first.length; i++){
    if (first[i] !== second[i]){
      difference += 1
    }
  }
  return difference;
};

module.exports = Hamming;
