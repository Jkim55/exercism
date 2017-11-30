export default class Gigasecond {
  constructor(birthday) {
    this.birthday = birthday
  }

  date () {
    const GigasecondsAnni = this.birthday.getTime() + Math.pow(10, 12)
    return new Date(GigasecondsAnni)
  }
}
