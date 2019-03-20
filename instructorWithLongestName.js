function instructorWithLongestName(list){
  var l = list.length, i, longestname = list[0];
  for(i = 1; i < l; i++)
    if(list[i].name.length > longestname.name.length)
      longestname = list[i];
  return longestname;

}
console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));
