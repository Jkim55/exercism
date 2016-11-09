const translationKey = {
  C:'G',
  G:'C',
  A:'U',
  T:'A'
}

class Transcriptor {
  toRna(dna) {
    var dnaCompiler = dna.split('')
    return dnaCompiler.map(this.translate).join('')
  }

  translate(char) {
    return translationKey[char]
  }
}

export default Transcriptor;
