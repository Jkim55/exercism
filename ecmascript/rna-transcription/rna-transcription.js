class Transcriptor {
  toRna(dna) {
    return [...dna].map(this.translate).join('')
  }

  translate(char) {
    if (translationKey.hasOwnProperty(char)){
      return translationKey[char]
    }
    throw new Error('Invalid input DNA.')
  }
}

const translationKey = {
  C:'G',
  G:'C',
  A:'U',
  T:'A'
}
export default Transcriptor;
