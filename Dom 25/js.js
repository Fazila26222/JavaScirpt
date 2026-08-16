
const box = document.getElementById("box");
box.classList.add("active");


box.classList.toggle("active");

if(box.classList.contains("active")){
    console.log("کلاس مورد نظر موجود میباشد")
}else{
    console.log("کلاس مورد نظرموجود نمیباشد")
}