var DnaTranscriber = function () {};

DnaTranscriber.prototype.toRna = function(dnaString) {
  var transcriber = {
    'C':'G',
    'G':'C',
    'A':'U',
    'T':'A'
  }

  var translatedRNA = dnaString.split("").map(function(nucleotides) {
    return transcriber[nucleotides];
  }).join("");

  return translatedRNA;
};


module.exports = DnaTranscriber;
