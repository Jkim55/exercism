class Bob {
  constructor (){
    this.phrases = {
      yell:      'Whoa, chill out!',
      question:  'Sure.',
      silence:   'Fine. Be that way!',
      whatever:  'Whatever.'
    }

  }

  hey(message) {
    if (this.isShouty(message))  {
        return this.phrases["yell"]
    } else if (this.isAsking(message)) {
        return this.phrases["question"]
    } else if (this.isSilent(message)) {
      return this.phrases["silence"]
    } else {
      return this.phrases['whatever']
    }
  }

  isShouty(input) {
    var re = /[a-zA-Z]/;
    return re.test(input) && input === input.toUpperCase();
  }

  isAsking(input){
    var re = /\?$/;
    return re.test(input)
  }

  isSilent(input){
    var re = /[a-zA-Z0-9]/;
    return !re.test(input)
  }
}

export default Bob;
