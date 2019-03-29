function calculateChange(total, cash){
/*given total and cash for transaction returns change
 in denominations 2000,1000,500,200,100,25,10,5,1 */
  var change = {};
  var rest = cash - total; //total change
  if(Math.floor(rest / 2000) > 0) //case 20$ bills
    change.twenty = Math.floor(rest / 2000);
  rest = rest % 2000;

  if(Math.floor(rest / 1000) > 0)//case 10$ bills
    change.ten = Math.floor(rest / 1000);
  rest = rest % 1000;

  if(Math.floor(rest / 500) > 0)//case 5$ bills
    change.five = Math.floor(rest / 500);
  rest = rest % 500;

  if(Math.floor(rest / 200) > 0) //case 2$ coin
    change.twoDollar = Math.floor(rest / 200);
  rest = rest % 200;

  if(Math.floor(rest / 100) > 0) //case 1$ coin
    change.dollar = Math.floor(rest / 100);
  rest = rest % 100;

  if(Math.floor(rest / 25)) //case quarter coin
    change.quarter = Math.floor(rest / 25);
  rest = rest % 25;

  if(Math.floor(rest / 10) > 0)//case dime coin
    change.dime = Math.floor(rest / 10);
  rest = rest % 10;

  if(Math.floor(rest / 5)) //case nickel coin
    change.nickel = Math.floor(rest / 5);
  rest = rest % 5;

  if(rest > 0)//case  Penny coin
    change.penny = rest;
  return change;
  }

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));