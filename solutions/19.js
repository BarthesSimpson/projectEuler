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

// Gross. This is the whole reason everyone uses libraries for anything date-related. 
// A solution from scratch would be pretty easy, but pointless.

let date = new Date(1901, 0, 1)
// date.setFullYear(1901)
// date.setMonth(0)
// date.setDate(1)

let endDate = new Date(2000, 11, 2)
// endDate.setFullYear(2000)
// endDate.setMonth(11)
// endDate.setDate(2)

let count = 0
while (date < endDate) {
  if (date.getDay() === 0) {
    count++
  }
  date.setMonth(date.getMonth() + 1)
}

console.log(count)
