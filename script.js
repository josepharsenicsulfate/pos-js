
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
            }else if(isDigit(buttons[i].innerHTML)){

                // updating code(barcode) as user submits input
                code = code.concat(buttons[i].innerHTML)
            }
            document.getElementById("code").innerHTML = code
        })
    }

    document.addEventListener("keydown", (event) => {
        const keyName = event.key
        if(isKey(keyName)){
            if(isDigit(keyName)){
                code = code.concat(keyName)
            }else if(keyName == "Backspace"){
                code = code.slice(0, code.length-1)
            }else if(keyName == "Enter"){
                getProd(code)
            }
        }

        document.getElementById("code").innerHTML = code
    }, false)
})

function getProd(code){

    // updating interface for product name and price
    document.getElementById("name").innerHTML = products[code].name
    document.getElementById("price").innerHTML = "$ " + products[code].price
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