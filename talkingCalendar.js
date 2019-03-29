function talkingCalendar(date){ // date format YYYY/MM/DD
  var year = date[0] + date[1] + date[2] + date[3];
  //var month = date[5]+date[6];
  var month= parseInt(date[5]+date[6]);
  var day = date[8] + date[9];
  var dayInt = parseInt(day);

  var monthsOfTheYear = ['January','February','March','April','May','June','July','August',
  'September', 'October','November','December'];
  var humanDate = monthsOfTheYear[month-1] + ' '+ dayInt + daySuffix(day) + ', '+ year;
  return humanDate;
}

function daySuffix(day) //Given a string of 2 characters returns sring 'st','nd','rd' or 'th'
{
  if(day ==='11')
    return 'th';
  var d = parseInt(day[1]);
  switch(d){
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
}

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));