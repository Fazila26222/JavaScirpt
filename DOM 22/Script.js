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
}

