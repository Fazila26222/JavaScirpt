let names = ["Fazila" , "Ali", "Shayan"];
for (let i = 0; i < names.length; i++){
    console.log(names[i]);
}

let numbers = [10, 25, 8, 40, 18, 50];
for (
    let number = 0; number < numbers.length; number++
){
    if (numbers[number]>20){
        console.log(numbers[number]);
    }
}

let num = [5, 10, 15, 20];
let sum = 0;
for (
    let i= 0; i < num.length; i++
){
    sum = sum + num[i];
}
console.log(sum);

let numb =[8,12,60,40];
let sUm = 0;
for (let l = 0; l < numb.length; l++){
    sUm = sUm + numb[l];
}
console.log(sUm);

let numbersLarg = [12,56,89,40];
let max = numbersLarg[0];

for (
    let i = 1; i < numbersLarg.length;i++
){
    if (numbersLarg[i]>max){
        max = numbersLarg[i]
    }
}
console.log(max)

let number = [3,8,15,20,7,4];
let count = 0;
for (
    let i = 0; i< number.length;
i++){
  if ( number[i]%2 ==0){
    count++
  }
}
console.log(count);

let nuMbers = [3,8,14,5,7,9];
let coUnt = 0;
for(
    let i = 0; i <nuMbers.length;i++
){
    if (nuMbers[i]%1==0){
        coUnt++
    }
}
console.log(coUnt);