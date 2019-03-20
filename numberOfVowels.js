function numberOfVowels(stri){
  var i, count = 0, l = stri.length;
  for(i= 0; i <l; i++)
    if(stri[i] == 'a' || stri[i]=='e' || stri[i]== 'i' || stri[i] =='o' || stri[i] == 'u')
      count ++;
  return count;
}
console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));