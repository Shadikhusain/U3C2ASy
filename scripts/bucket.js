// On clicking remove button the item should be removed from DOM as well as localstorage.
// On clicking remove button the item should be removed from DOM as well as localstorage.
var mydata = JSON.parse(localStorage.getItem("coffee"))
showcartdata();

function showcartdata() {
    var cart = document.getElementById("bucket");
    cart.innerHTML = "";

    var h3 = document.getElementById("total_amount");
    let total = 0;
    for (let i = 0; i < mydata.length; i++) {
        total = total + mydata[i].productprice;
    }
    h3.innerText = total;




    mydata.map(({ productimg, productprice, productname, }, index) => {
        // console.log( "index" ,index)
        var chotecartdiv = document.createElement("div");
        var image = document.createElement("img");
        var name = document.createElement("h4");
        var price = document.createElement("h4");
        var deletebutton = document.createElement("button");



        image.setAttribute("src", productimg);
        chotecartdiv.setAttribute("id", "chotecartdiv");
        deletebutton.innerText = "Remove Coffee";
        deletebutton.setAttribute("id", "remove_coffee");
        deletebutton.addEventListener("click", () => {
            removeitem(index)
        })
        name.innerText = productname;
        price.innerText = productprice;
        chotecartdiv.append(image, name, price, deletebutton);
        cart.append(chotecartdiv);

    })
}




var removeitem = (index) => {
    //   h3.innerHTML="";
    mydata.splice(index, 1);
    localStorage.setItem("coffee", JSON.stringify(mydata));
    showcartdata();
}