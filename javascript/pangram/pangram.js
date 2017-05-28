function Pangram(input) {
  this.input = input
}

Pangram.prototype.isPangram = function () {
  var alphabetKey = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  var formattedSentence = this.input.toLowerCase()
  var inputArray = alphabetKey.filter(function(letter) {
    return formattedSentence.includes(letter)
  })
  return alphabetKey.toString() === inputArray.toString()
}

module.exports = Pangram
