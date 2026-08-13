const button = document.getElementById("darkModeBtn");
const body = document.body;

button.addEventListener("click", function(){
    body.classList.toggle("dark");
    if(body.classList.contains("dark")){
        button.textContent = "light Mode"
    }else{
        button.textContent = "Dark Mode";
    }
})