function ChageText(){
    let text = document.getElementById("tital")
    .style.color="red";

    let students = document.getElementsByClassName("student");
    for(let i = 0; i < students.length; i++){
        students[i].style.background="green";
    }

    let heading = document.getElementsByTagName("h2");
    for(let i = 0 ; i < heading.length; i++){
        heading[i].style.color="green";
    }
    let firsCourse = document.querySelector(".cursese");
    firsCourse.style.fontSize = "34px";

    let cursese = document.querySelectorAll(".cursese");

    cursese.forEach(function(item){
        item.style.border="1px solid green";
        item.style.padding = "10px";
    })

    
}

