class Bob {
  constructor (){
    this.response = {
      annoyed:'Whoa, chill out!',
      nonchalent:'Sure.',
      angry:'Fine. Be that way!',
      disengaged:'Whatever.'
    }

  }

  hey(message) {
    if (speaker.isShouty(message))  {
        return this.response.annoyed
    } else if (speaker.isAsking(message)) {
        return this.response.nonchalent
    } else if (speaker.isSilent(message)) {
      return this.response.angry
    } else {
      return this.response.disengaged
    }
  }
}

const speaker = {
  isShouty: function (input) {
    return /[a-zA-Z]/.test(input) && input === input.toUpperCase();
  },
  isAsking: function (input){
    return /\?$/.test(input)
  },
  isSilent: function(input){
    return !/[a-zA-Z0-9]/.test(input)
  }
}

export default Bob
