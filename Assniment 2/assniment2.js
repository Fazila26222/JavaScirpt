// سوال اول
let name = "Fazila";
let lastName = "Ahmadi";
let age = 30;
let country = "Afghanistan";
let education = "Computer Science";

console.log(
  "My Name is",
  name,
  "My Last Name",
  lastName,
  "I am",
  age,
  "years old",
  "I am from",
  country,
  "My Education is",
  education,
);

console.log("=========================");
//  سوال دوم

let number1 = 25;
let number2 = 10;
// به شکل افقی
let addition = number1 + number2;
let subtraction = number1 - number2;
let multiplication = number1 * number2;
let divison = number1 / number2;
let modulus = number1 % number2;
let exponent = number1 ** number2;

console.log(addition, subtraction, multiplication, divison, modulus, exponent);
// به شکل عمودی
console.log(number1 + number2);
console.log(number1 - number2);
console.log(number1 / number2);
console.log(number1 * number2);
console.log(number1 ** number2);
console.log(number1 % number2);

console.log("=================");
// سوال سوم

let Name = "Fazila";
let Age = 30;

if (Age < 18) {
  console.log(Name, "کمتر از 18 سال است");
} else if (Age >= 18 && Age <= 30) {
  console.log(Name, "بین 18 تا 30 سال است");
} else if (Age >= 31 && Age <= 50) {
  console.log(Name, "بین 31 تا 50 سال است");
} else {
  console.log(Name, "بیشتر از 50 سال است");
}

console.log("==============");
// سوال چهارم
let day = 7;
switch (day) {
  case 1:
    console.log("Saturday");
    break;
  case 2:
    console.log("Sunday");
    break;
  case 3:
    console.log("Monday");
    break;
  case 4:
    console.log("Tuesday");
    break;
  case 5:
    console.log("Wednseday");
    break;
  case 6:
    console.log("Thursday");
    break;
  case 7:
    console.log("Friday");
    break;
  default:
    console.log("Invilet");
    break;
}

console.log("=============");
// سوال پنحم

function sum(a, b) {
  console.log(a + b);
}
sum(100, 240);

console.log("================");
// سوال ششم

let students = [
  "Fazila",
  "Fatima",
  "zahra",
  "Shrara",
  "Marina",
  "Bahara",
  "Hajer",
  "Sara",
  "Sahar",
  "Sabur Gol",
];
console.log(students[0], students[9]);

students.push("Ali");
console.log("After push:", students);
students.splice(9, 1);
console.log("After splice:", students);
console.log(students.length);

console.log("===============");
// سوال هفتم

for (let number = 1; number <= 100; number++) {
  console.log(number);
}

sum = 0;
for (let number = 1; number <= 100; number++) {
  if (number % 2 == 0) {
    sum += number;
  }
}
console.log(sum);

console.log("============");
// سوال هشتم

let number = 1;
while (number <= 50) {
  console.log(number);
  number += 2;
}

// سوال 9
console.log("================");

let num = 10;
do {
  console.log(num);
  num--;
} while (num >= 1);


