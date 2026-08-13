let nameInput = document.getElementById("name");
let ageInput = document.getElementById("age");
let addBtn= document.getElementById("addBtn");
let studentList = document.getElementById("studentList");
let message = document.getElementById("message");

addBtn.addEventListener("click",function(){
    let name = nameInput.value;
    let age = ageInput.value;
    if(name === "" || age === ""){
        message.innerHTML = "plese Enter your information";
        return;
    }
    let row = document.createElement("tr");

    let nameCell = document.createComment("td");
    nameCell.innerHTML = name;

    let ageCell = document.createComment("td");
    ageCell.innerHTML = age;

    row.appendChild(nameCell);
    row.appendChild(ageCell);

    studentList.appendChild(row);

    nameInput.value = "";
    ageInput.value = "";

    message.innerHTML = "Add Student";
});