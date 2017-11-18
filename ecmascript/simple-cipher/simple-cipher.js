class Cipher {
  constructor(key = generate.key()){
    this.key = generate.validKey(key);
  }

  encode(secretmsg){
    return [...secretmsg]
      .map((char, i) => {
        const keyIndex = this.key[i]
          ? generate.alpha.indexOf(this.key[i])
          : generate.alpha.indexOf(this.key[i % this.key.length])
        return generate.alpha.charAt((generate.alpha.indexOf(char) + keyIndex) % 26)
      })
      .join('')
  }

  decode(gooblygook){
    return [...gooblygook]
      .map((char, i) => {
        const index = generate.alpha.indexOf(char) - generate.alpha.indexOf(this.key[i])
        return index >= 0 ? generate.alpha.charAt(index) : generate.alpha.charAt(index + 26)
      })
      .join('')
  }
}

const generate = {
  alpha: 'abcdefghijklmnopqrstuvwxyz',
  num: function(){return Math.floor(Math.random() * this.alpha.length)},
  key: function (){
    let val = ""
    while (val.length < 100) {
      val = val.concat(this.alpha.charAt(this.num()))
    }
    return val
  },
  validKey: function(key){
    if (/[a-z]+/.test(key)){
      return key
    }
    throw new Error('Bad key');
  }
}

export default Cipher
