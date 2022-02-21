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

window.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByClassName("numpad")
    let code = ""

    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener("click", function(){
            if(buttons[i].innerHTML == "c"){
                code = code.slice(0, code.length-1)
            }else if(buttons[i].innerHTML == "enter"){

            }else{
                code = code.concat(buttons[i].innerHTML)
            }
            document.getElementById("code").innerHTML = code
        })
    }

    console.log(buttons)
})