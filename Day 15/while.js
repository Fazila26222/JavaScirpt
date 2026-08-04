let number = 1;
while (number <= 10){
    console.log(number);
    number++;
}
console.log("Loop Finished")

let mark;
let total = 0;
let count = 0;
let highest = 0;
let lowest = 0;

while(true){
    mark = Number(prompt("Add Your number(0 == exit"));
    if( mark ===0 ){
        break;
    }
    if (mark < 0 || mark > 100){
        console.log("Number is 0 - 100");
        continue;
    }
    total += mark;
    count++;

    if( mark > highest){
        lowest = mark;
    }
}
if (count > 0){
    let average = total / count;
    console.log("Total Student:"+ count);
    console.log("Total Mark:"+ total);
    console.log("Average:"+ average.toFixed(2));
    console.log("Highest Mark:"+ highest);
    console.log("Lowest Mark:"+ lowest);
}else{
    console.log("False");
}