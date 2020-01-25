/*

You are given the following information, but you may prefer to do some research for yourself.

    1 Jan 1900 was a Monday.
    Thirty days has September,
    April, June and November.
    All the rest have thirty-one,
    Saving February alone,
    Which has twenty-eight, rain or shine.
    And on leap years, twenty-nine.
    A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.

How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?

*/

// Not needed
const isLeapYear = year => {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      return true;
    }
    return false;
  }
  if (year % 4 === 0) {
    return true;
  }
  return false;
}

const getSundays = (startYear, endYear) => {
  let sundays = 0;
  for (let i = startYear; i <= endYear; i++) {
    for (let j = 0; j < 12; j++) {
      let date = new Date(i, j, 1);
      if (date.getDay() === 0) {
        sundays++;
      }
    }
  }
  return sundays;
}

console.log(getSundays(1901, 2000));