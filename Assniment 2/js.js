// سوال 10

let Students = [];
function addStudent(name, age, score) {
  let reslet;
  if (score >= 95) {
    reslet = "+A";
  } else if (score >= 90) {
    reslet = "A";
  } else if (score >= 80) {
    reslet = "B";
  } else if (score >= 70) {
    reslet = "C";
  } else if (score >= 60) {
    reslet = "D";
  } else {
    reslet = "Fail";
  }
  Students.push({
    name:name,
    age: age,
    score: score,
    reslet: reslet
  });
}
let name = prompt("name");
let age = Number(prompt("age"));
let score = Number(prompt("score"));
addStudent("fazila", 27, 80);

for (let i = 0; i < Students.length; i++) {
  
  console.log("Name: " + Students[i].name);
  console.log("Age: " + Students[i].age);
  console.log("Score: " + Students[i].score);
  console.log("Reslet: " + Students[i].reslet);
}
