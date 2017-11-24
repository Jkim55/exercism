class Cipher {
  constructor(key = generate.key()){
    this.key = generate.validationCheck(key)
  }

  encode(secretmsg){
    return [...secretmsg]
      .map((char, i) => generate.shift(generate.alpha.indexOf(char), generate.keyIndex(this.key, i), "right"))
      .join('')
  }

  decode(gooblygook){
    return [...gooblygook]
      .map((char, i) => generate.shift(generate.alpha.indexOf(char), generate.alpha.indexOf(this.key[i]), "left"))
      .join('')
  }
}

const generate = {
  alpha: 'abcdefghijklmnopqrstuvwxyz',
  num: function (){return Math.floor(Math.random() * this.alpha.length)},
  key: function (){
    let val = ""
    while (val.length < 100) {
      val = val.concat(this.alpha.charAt(this.num()))
    }
    return val
  },
  validationCheck: function(key){
    if (/[a-z]+/.test(key)){
      return key
    }
    throw new Error('Bad key');
  },
  keyIndex: function(key, currentIdx){
    return key[currentIdx] ? generate.alpha.indexOf(key[currentIdx]) : generate.alpha.indexOf(key[currentIdx % key.length])
  },
  shift: function(msgIndex, keyIndex, direction){
    if (direction === "right"){
      return generate.alpha.charAt((msgIndex + keyIndex) % 26)
    } else if (direction === "left"){
    return msgIndex - keyIndex >= 0
    ? generate.alpha.charAt(msgIndex - keyIndex)
    : generate.alpha.charAt(msgIndex - keyIndex + 26)
    }
  }
}

export default Cipher
