function Isogram(word) {
  this.letters = word.toLowerCase().replace(/-|\s/g, "").split("")
}

Isogram.prototype.isIsogram = function () {
  var letterTally = {}
  var result = true;
  this.letters.forEach(function(letter){
    letterTally.hasOwnProperty(letter) ? result = false : letterTally[letter] = 1
  })
  return result
}

module.exports = Isogram
