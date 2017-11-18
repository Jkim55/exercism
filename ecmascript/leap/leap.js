export default function isLeapYear (year){
  const is400thYear = year % 400 === 0
  const is100thYear = year % 100 === 0
  const is4thYear = year % 4 ===0

  return is400thYear || !is100thYear && is4thYear
}
