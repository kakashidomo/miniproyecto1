let btn = document.querySelector('#addEmailbtn')
let inputEmail = document.querySelector('#emailInput')
let errors = []
//let modalBtn = document.querySelector('#modal-button')
console.log(inputEmail);

btn.addEventListener("click", function (event) { 
    event.preventDefault()
    inputEmail.forEach(function (field) {
        if (inputEmail.value == "") {
            inputEmail.classList.add("errorField")
            errors.push(field.id)
        }
    })
    alerta
})


/*

//Funcion validar correo
//funcion suscribirse
//Funcion limpiar celda */

