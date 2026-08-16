const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("taskList");


addBtn.addEventListener("click" ,function(){
    const taskValue = taskInput.value.trim();
    if(taskValue === ""){
        alert("Plese Enter a task");
        return;
    }
    
    // 1 create
    const li = document.createElement("li");

    // 2 create text node

    const text = document.createTextNode(taskValue);
    // 3 add text to li

    li.appendChild(text);

    // 4 add li to ul
    list.appendChild(li);

    // clear input
    taskInput.value ="";

})