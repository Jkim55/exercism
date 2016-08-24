function dnaTranscriber() {
};

dnaTranscriber.prototype.toRna = function (dna){
  var dnaCompiler = []
  switch (dna) {
  case 'C':
    return 'G';
    break;
  case 'G':
    return 'C';
    break;
  case 'A':
    return 'U';
    break;
  case 'T':
    return 'A';
    break;
  }
}

module.exports = dnaTranscriber;
