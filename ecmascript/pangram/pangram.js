class Pangram{
  constructor (phrase) {
    this.phrase = phrase
  }

  isPangram() {
    return [...key.alphabet].every((alpha) => {
      return this.phrase.toLowerCase().indexOf(alpha) !== -1
    })
  }
}

const key = {
  alphabet: 'abcdefghijklmnopqrstuvwxyz'
}

export default Pangram
