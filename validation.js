const name = document.getElementById('name')
const nim = document.getElementById('nim')
const email = document.getElementById('email')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit',(e) =>{
    let messages = []
    if(name.value === '' || name.value == null){
        messages.push('Sorry, but we need your Name to proceed')
    }
    if(nim.value.length < 10){
        messages.push('Sorry, but binusians has 10 digits of NIM')
    }
    if(nim.length > 10){
        messages.push('Sorry, but binusians only has 10 digits of NIM')
    }
    if(nim.value != (0-9)){
        messages.push('Binusian Nim only includes Numerials')
    }
    if(email.value != '&.@binus.ac.id'){
        messages.push('Please enter the correct email')
    }
    if(messages.length > 0){
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
    
})