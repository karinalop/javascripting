function multiplicationTable(number){
  var i, j, table = '';
  for(i = 1; i <= number; i++){
    for(j = 1; j <= number; j++)
      table += i * j + ' ';
    table +='\n';
  }
  return table;
}

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));