function Gigasecond(date){
  this.birthday = date
}

Gigasecond.prototype.date = function () {
  birthdateInSeconds = this.birthday.getTime() / 1000;
  GigasecondsAnniversary = birthdateInSeconds + Math.pow(10, 9);
  return new Date(GigasecondsAnniversary * 1000);
}

module.exports = Gigasecond
