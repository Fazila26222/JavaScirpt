let userName = "Fazila";
let password = "1234";

if (userName == "Fazila" && password == "123") {
  console.log("login");
} else {
  console.log("password is erro");
}

// else if
let name = "fazila";
let studentClass = "12th";

let math = 80;
let dari = 70;
let english = 87;
let bio = 85;
let computer = 100;

let obtain = math + dari + english + bio + computer;

console.log("Total Number:", obtain);
let x = (obtain * 100) / 500;

console.log(x);

console.log("Name:", name);
console.log("Class:", studentClass);
console.log("Math:", math);
console.log("Dari:", dari);
console.log("English:", english);
console.log("Bio:", bio);
console.log("Computer:", computer);
console.log("obtain:", "/500");
console.log("Persontage:",x);

if (x > 90) {
  let reselt = "A+";
  console.log("Reselt:",reselt);
}
else if(x > 80){
    let reselt = "B";
    console.log("Reselt:",reselt);
}
else if(x > 70){
    let reselt = "C";
    console.log("Reselt:",reselt);
}
else{
    let reselt = "Fail";
    console.log("Reselt:",reselt);
}




