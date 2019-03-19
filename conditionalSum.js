function conditionalSum(array, condition){
  var i; l = array.length, sum = 0;
  if(condition === "even"){
    for(i = 0; i < l; i++)
      if(array[i] % 2 == 0)
        sum += array[i];
  }
  else
    if(condition === "odd"){//condition is "odd"
      for(i = 0; i < l; i++)
        if(array[i] % 2 == 1)
          sum += array[i];
    }
  return sum;
}
console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));