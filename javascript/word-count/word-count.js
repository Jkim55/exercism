function Words() {}

Words.prototype.count = function(sentence) {
  var words = sentence.toLowerCase().replace(/\s'|'\s/g, ' ').replace(/[¡¿]/g, '').match(/([^\u0000-\u007F]|['\w])+/g)
  var wordCounter = {};
  words.forEach(function(word){
    wordCounter.hasOwnProperty(word) ? wordCounter[word]++ : wordCounter[word] = 1
  })
  return wordCounter
}

module.exports = Words;
