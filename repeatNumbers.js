function repeatNumbers(matrix){
  var i, j, l = matrix.length, array='', str;
  for(i = 0; i < l; i++){
    for(j = 0, str = ''; j < matrix[i][1]; j++)
      str+=matrix[i][0];
    if(i > 0 && i < l)
      array +=',';
    array +=str;
    }
  return array;
}

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));