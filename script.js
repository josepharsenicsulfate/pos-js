
// default values for testing
const products = [
    {
        id: 0,
        name: "soup",
        price: 5.00,
        category: "food"
    },
    {
        id: 1,
        name: "beans",
        price: 3.00,
        category: "food"
    },
    {
        id: 2,
        name: "chips",
        price: 2.00,
        category: "food"
    },    
    {
        id: 3,
        name: "soda",
        price: 1.00,
        category: "drinks"
    }
]

// onload
window.addEventListener("DOMContentLoaded", function(){

    // getting numpad elements
    let buttons = document.getElementsByClassName("numpad")
    let code = ""

    for(let i = 0; i < buttons.length; i++){

        // click event listener for numpad
        buttons[i].addEventListener("click", function(){
            if(buttons[i].innerHTML == "c"){

                // deleting last character of string
                code = code.slice(0, code.length-1)

                // resetting fields
                document.getElementById("name").innerHTML = ""
                document.getElementById("price").innerHTML = ""
            }else if(buttons[i].innerHTML == "enter"){

                // getting values from list using code as index
                getProd(code)
            }else{

                // updating code(barcode) as user submits input
                code = code.concat(buttons[i].innerHTML)
            }
            document.getElementById("code").innerHTML = code
        })
    }
    console.log(buttons)
})

function getProd(code){

    // updating interface for product name and price
    document.getElementById("name").innerHTML = products[code].name
    document.getElementById("price").innerHTML = "$ " + products[code].price
}