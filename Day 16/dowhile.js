
/*
FOR
for (let i = 1; i <= 5; i++){
    console.log(i)
}
    

While

let x = 1;
while(x <=5){
    console.log(x);
    x++;
}

 DO While 

let i = 1;
do{
    console.log(i);
    i++;
}while(i <= 5);

*/

let total = 0;
let productnumber = 1;
let choice;

do{
console.log(`\n========== product ${productnumber}========`);
let productName = prompt("Enter Product Name:");
let price =Number( prompt("Enter Product Price:"));
let quantity = Number(prompt("Enter Product Quqntity:"));
let subTotal = price * quantity;

console.log("-----------------");
console.log("Product :",productName);
console.log("Price :",price);
console.log("Quantity :",quantity);
console.log("SubTotal :",subTotal);
console.log("----------------");

total =+ subTotal;
productnumber++;
choice = prompt("Do you whant to add another product? (Yes/ No")

}while(choice.toLowerCase()=== "yes");
console.log("\n=======================");
console.log("Total product:",productnumber -1);
console.log("Genral Total:",total);
console.log("\n=======================");
