var submitbutton = document.getElementById("confirm");

submitbutton.addEventListener("click", (event) => {
    event.preventDefault()

    var arr = ["Accepted", "being Prepared", "being Packed", "Out For Delivery", "Order Delivered"];

    for (i = 0; i < arr.length; i++) {

        alert(arr[i]);
        console.log(`${[i]}`)
        const myinterval = setInterval(() => {



        }, 5000)



    }


})