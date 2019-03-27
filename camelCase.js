function camelCase(input){
  var i, l = input.length, str = '';
  for(i = 0; i < l; i++)
    if(input[i] === ' ' && i < l - 1){
      i++;
      str += input[i].toUpperCase();
    }
    else
      str +=input[i];
  return str;

}

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
