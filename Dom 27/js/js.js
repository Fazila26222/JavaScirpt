const productList = document.getElementById("productList");
const removeBtn = document.getElementById("removeBtn");
const removeChildBtn = document.getElementById("removeChildBtn");
const replecBtn = document.getElementById("replaceBtn");
const cloneBtn = document.getElementById("cloneBtn");

// 1 remove()
removeBtn.addEventListener("click",function(){
    const products = productList.children;
    if(products.length > 0){
        products[products.length - 1].remove();
    }else{
        alert("no child in prodct")
    }
});
// 2 removeChilde
removeChildBtn.addEventListener("click",function(){
    const fristProdct = productList.children[0];
    if(fristProdct){
        productList.removeChild(fristProdct)
    }
});
// 3 replce
replecBtn.addEventListener("click",function(){
    const firstProdct = productList.children[0];
    if(firstProdct){
        const newProdct = document.createElement("div");
        newProdct.className = "product";
        newProdct.innerHTML = `
        <h3>Table</h3>
        <p>Price:$350</p>
        `;
        productList.replaceChild(
            newProdct,
            firstProdct
        )
    }
})
