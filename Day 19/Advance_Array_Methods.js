const numbers = [10, 25, 30, 41, 50];
// foreach
//  یک میتود است که روی تمام اعضای کار میکند تاثیر خود را میگذارد
//  ومقدار جدید را برمیکرداند و ریترن ندارد
numbers.forEach((num, index) => {
  console.log(index, num);
});

// map تمام عناصر یک ارایه را تغیر و یک ارایه جدید تولد میکند
const reselt = numbers.map((num) => {
  return num * 2;
});
console.log(reselt);

//  filter  عنصر مورد نظر میکشد در صورت درست باشد

const even = numbers.filter((x) => {
  return x % 2 == 0;
});
console.log(even);

const students = [
  {
    id: 1, name: "Fazila", score: 90},
   { id: 2, name: "Shamim", score: 80},
   { id: 3,name: "Bahara",score: 91},
   { id: 4, name: "Fatima",score: 98},
    {id: 5,name: "Hajer",score: 94 },
];

console.log("---------For Each------------");

students.forEach((student) => {
  console.log(`${student.id} | ${student.name}
         | ${student.score}`);
});

console.log("--------------Map-------------");

const names = students.map(student=>student.name);
console.log(names)

console.log("--------Filter---------");

const passed = students.filter(student=>student.score>=85);
console.log(passed);