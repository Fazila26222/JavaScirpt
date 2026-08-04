let students = [
  {
    id: 1,
    name: "Fazila",
    html: 80,
    css: 90,
    JavaScript: 85,
  },
  {
    id: 1,
    name: "Fatima",
    html: 70,
    css: 95,
    JavaScript: 85,
  },
  {
    id: 1,
    name: "Hajer",
    html: 90,
    css: 90,
    JavaScript: 85,
  },
];
console.log("-----------------------------------------------------------------------");
console.log("ID\tName\tHTML\tCSS\tJAVASCRIPT\tAverage");
console.log("------------------------------------------------------------------------");
for (let i = 0; i < students.length; i++) {
  let total = students[i].html + students[i].css + students[i].JavaScript;

  let average = total /3;

  console.log(
    students[i].id +
      "\t" +
      students[i].name +
      "\t" +
      students[i].html +
      "\t" +
      students[i].css +
      "\t" +
      students[i].JavaScript +
      "\t" +
      total +"\t"+
      average.toFixed(1)
  );
}
