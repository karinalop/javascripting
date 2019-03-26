function urlEncode(str){
 var i, l = str.length, word = [];
 for(i = 0; i < l; i++)
  if(str[i] == ' ' && str[i+1] && str[i - 1])
    word +='%20';
  else
   word +=str[i];
 return word;
}

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));