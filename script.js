
// default values for testing
const products = [
    {
        id: "0000",
        name: "soup",
        price: 5.00,
        category: "food",
        qty: 1
    },
    {
        id: "0001",
        name: "beans",
        price: 3.00,
        category: "food",
        qty: 1
    },
    {
        id: "0002",
        name: "chips",
        price: 2.00,
        category: "food",
        qty: 1
    },    
    {
        id: "0003",
        name: "soda",
        price: 1.00,
        category: "drinks",
        qty: 1
    },
    {
        id: "0420",
        name: "kusa",
        price: 10.00,
        category: "plant",
        qty: 1
    },
    {
        id: "0005",
        name: "krazy",
        price: 6.00,
        category: "dairy",
        qty: 1
    },
    {
        id: "0010",
        name: "yes",
        price: 1.00,
        category: "dairy",
        qty: 1
    },
    {
        id: "042069",
        name: "deez",
        price: 1.00,
        category: "nuts",
        qty: 1
    }
]

// onload
window.addEventListener("DOMContentLoaded", function(){

    // getting numpad elements
    let buttons = document.getElementsByClassName("numpad")
    let code = ""
    let price = 0
    let cart = []
    let curr

    console.log(products)

    for(let i = 0; i < buttons.length; i++){

        // click event listener for numpad
        buttons[i].addEventListener("click", function(){
            if(buttons[i].innerHTML == "c"){

                // deleting last character of string
                code = code.slice(0, code.length-1)

            }else if(buttons[i].innerHTML == "enter"){

                // pushing object to array as current selected item
                curr = getProduct(code)
                showProduct(curr)
            }else if(buttons[i].innerHTML == "add"){

                // pushing object to cart for compilation
                if(cart.includes(curr)){
                    cart[cart.findIndex(i => i.id == curr.id)].qty++
                    previewReceipt(cart)
                }else{
                    cart.push(curr)
                    previewReceipt(cart)
                }

                console.log(cart)
            }else if(isDigit(buttons[i].innerHTML)){

                // updating code(barcode) as user submits input
                code = code.concat(buttons[i].innerHTML)
            }

            // updating the code displayed for every button click
            document.getElementById("code").innerHTML = code
        })
    }

    document.addEventListener("keydown", (event) => {

        // basic key listener "+" not working atm
        const keyName = event.key

        if(isKey(keyName)){
            if(isDigit(keyName)){
                code = code.concat(keyName)
            }else if(keyName == "Backspace"){
                code = code.slice(0, code.length-1)
            }else if(keyName == "Enter"){
                curr = getProduct(code)
                showProduct(curr)
            }else if(keyName == "+"){
                if(cart.includes(curr)){
                    cart[cart.findIndex(i => i.id == curr.id)].qty++
                    calcPrice(cart)
                    previewReceipt(cart)
                }else{
                    cart.push(curr)
                    calcPrice(cart)
                    previewReceipt(cart)
                }
            }

            document.getElementById("code").innerHTML = code
        }
    }, false)
})

function getProduct(code){

    // function to get the product object using code as reference
    return products[products.findIndex(i => i.id == code)]
}

function showProduct(curr){

    // updating the right display to show current selected item
    document.getElementById("name").innerHTML = curr.name
    document.getElementById("price").innerHTML = "$" + curr.price
    document.getElementById("quantity").innerHTML = curr.qty
    document.getElementById("item-price").innerHTML = "$" + curr.price * curr.qty
}

function previewReceipt(cart){

    let target = document.getElementById("cart-items")
    let generatedElements = ""

    cart.map((data)=> {
        generatedElements += `<p>${data['name']} ${data['price']} ${data['qty']}</p>`
    })

    generatedElements += `<h3>Total: $${calcPrice(cart)}</h3>`
    
    // adding html elements to container
    target.innerHTML = generatedElements
}

function calcPrice(cart){
    let price = 0

    // looping through cart to calculate price
    for(let i = 0; i < cart.length; i++){
        price += cart[i].price * cart[i].qty
    }

    console.log(price)
    return price
}

function isDigit(char){

    // identifying if keyboard input is digit
    if(char == 0 
        || char == 1 
        || char == 2 
        || char == 3 
        || char == 4 
        || char == 5 
        || char == 6 
        || char == 7 
        || char == 8 
        || char == 9
        ){
            return true
        }
}

function isControl(char){

    // identifying if keyboard input is control in keypad
    if(char == "."
        || char == "Backspace"
        || char == "ArrowUp"
        || char == "ArrowDown"
        || char == "Enter"
        || char == "+"
        ){
            return true
        }
}

function isKey(char){

    // identifying if keyboard input is in keypad
    if(isDigit(char)){
        return true
    }else if(isControl(char)){
        return true
    }
}