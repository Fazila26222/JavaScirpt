// And Operators حتا اگر یک شرط ما درست نباشد نتیجه false میباشد
let age =23;
let id = true;
let post ="Web Dev";
console.log(age >= 18 && id == true && post == "Web Dev");

// OR  اکراز بین شرط ها یک شرط ما هم درست باشد نتیجه درست است
console.log(age >= 18 || post == "Eng" );

// not بر عکس است درست بود اشتباه نشان اگر لشتباه درست نشان

console.log(!id);


let product = "Laptop";
let price = 1000;
let quantity = 2;
let discount = 200;
let wallet = 2500;

let total = price * quantity;
let finalPrice = total - discount;

let enoughMoney = wallet >= finalPrice;
let hasDiscount = discount > 0;

let canBuy = enoughMoney && hasDiscount;

wallet -= finalPrice;

console.log("Product:", product);
console.log("Total Price:", total);
console.log("Discount:", discount);
console.log("Final Price:", finalPrice);