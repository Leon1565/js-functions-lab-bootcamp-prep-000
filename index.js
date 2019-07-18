// write your code below!
function happyHolidays()
{
  return "Happy holidays!"
}
function happyHolidaysTo(name)
{
  return `Happy holidays, ${name}!`
}
happyHolidaysTo('Cha')

function happyHolidayTo(holiday, name)
{
  return `Happy ${holiday}, ${name}!`
}
happyHolidayTo('Christmas', 'Cha')

function holidayCountdown(days, holiday)
{
  holidayCountdown(10, 'Christmas')
  return `It's ${days} days until ${holiday}!`
}