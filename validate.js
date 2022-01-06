let form = document.querySelector('#form')
// event listener
form.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log(event)

    let message = ""
    let error = document.querySelector('#error')
    let name, phone, address, producttype, colortype, quantity, agreement
    name = document.querySelector('#name')
    phone = document.querySelector('#phone')
    address = document.querySelector('#address')
    producttype = document.querySelector('#producttype')
    colortype = document.querySelector('#colortype')
    quantity = document.querySelector('#quantity')
    agreement = document.querySelector('#agreement')

    if(name.value == "") {
        message = "Name must be filled!"
    }
    else if(!isAlphabet(name.value)){
        message = "Name must only contains letters(a-z)!"
    }
    else if(phone.value == "") {
      message = "Phone number must be filled!"
    }
    else if(isNaN(phone.value)){
      message = "Invalid Phone Format!"
    }
    else if(address.value == "") {
      message = "Address must be filled!"
    }
    else if(!isAlphabet(address.value)){
        message = "Address must only contains letters(a-z)!"
    }
    else if(producttype.value == ""){
        message = "Please Choose a Product"
    }
    else if(colortype.value == ""){
        message = "Please Choose a Color"
    }
    else if(quantity.value == ""){
        message = "Quantity must be filled!"
    }
    else if(isNaN(quantity.value)){
        message = "Quantity must be a number!"
    }
    else if(quantity.value <=0){
        message = "Invalid Quantity! (must be more than 0)"
    }
    else if(!agreement.checked){
        message = "You need to agree with the terms and conditions!"
    }
    else{
        alert("Reservation Succcesful!")
    }

    error.textContent = message

})

function isAlphabet(string) {
    string = string.toLowerCase()
    let valid = true
    Array.from(string).forEach(c => {
        if (c < 'a' || c > 'z'){
            valid = false
        }
        if (c == ' '){
            valid = true
        }
    })

    return valid
}