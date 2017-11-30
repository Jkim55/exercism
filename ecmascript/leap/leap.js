export default function isLeapYear (year){
  return evaluate.is400thYear(year) || !evaluate.is100thYear(year) && evaluate.is4thYear(year)
}

const evaluate = {
  is400thYear: function(year){return year % 400 === 0},
  is100thYear: function(year){return year % 100 === 0},
  is4thYear: function(year){return year % 4 === 0}
}
