function sumLargestNumbers(data){
  var i, l = data.length, x = [0], y = data[1], p;
  for(var i = 2; i < l; i++)
    if(x < data[i]){
      x = data[i];
      p = i;
    }
  for(var i = 2; i < l; i++)
    if (i != p && y < data[i])
      y = data[i];
  return x + y;
}
console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));