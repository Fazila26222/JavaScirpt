const square=(a)=>{
console.log(a*a);
}
square(5);

const greet = (name)=>{
    console.log("Hello",name);
}
greet("Fazila");

const add = (a,b)=>{
     console.log(a+b);
}
add(20,40);

function sum(a,b){
    return a + b;
}
let result = sum(8,3);
console.log(result);

function calcuationInvoice(productName, price,quantity,discount){
    let total = price * quantity;
    let discountAmount = total * discount / 100;
    let finalPrice = total - discountAmount;

return{
    Product : productName,
    Price : price,
    Quantity : quantity,
    Total : total,
    Discount : discount + "%",
    FinalPrice :finalPrice
}}

let invoce = calcuationInvoice("Laptop",5000,2,10);
console.log(invoce);