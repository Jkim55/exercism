function DnaTranscriber (){
  this.rnaKey = {
    C:'G',
    G:'C',
    A:'U',
    T:'A'
  }
};

DnaTranscriber.prototype.toRna = function(dnaString) {
  var transcriber = this.rnaKey
  return dnaString.split("").map(function(nucleotides) {
    return transcriber[nucleotides];
  }).join("")
};


module.exports = DnaTranscriber;
