class Transcriptor {
  toRna(dna) {
    return [...dna].map(this.translate).join('')
  }

  translate(char) {
    return translationKey[char]
  }
}

const translationKey = {
  C:'G',
  G:'C',
  A:'U',
  T:'A'
}
export default Transcriptor;
