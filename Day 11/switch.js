let role = "student";

switch (role) {
  case "admin":
    console.log("Full Access");
    break;
  case "maniger":
    console.log("Manage Employee");
    break;
  case "teacher":
    console.log("create course") ;
    break;
  case "student":
    console.log("Viwe courses") ;
    break;
  default:
    console.log("Invalid user");
    break;    
}
// Ex shpping

let orderStutus = "shpping";

switch(orderStutus){
    case "pendding":
        console.log("Your order has been received");
        break;
    case "confirmed":
        console.log("Payment confirmed");
        break;

    case "shpping":
        console.log("Your package is on the way");
        break;
    default:
        console.log("Unknown order stutus")  ;
        break;      
}

