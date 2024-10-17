document.title = 'Iniciar sesion'

//Crear el contenedor para el formulario
const container = document.createElement('div')
container.style.margin = '20px'
container.style.width = '300px'
document.body.appendChild(container)

//Titulo
const titulo = document.createElement('h2')
titulo.textContent = "Iniciar sesion"
container.appendChild(titulo)

//formulario
const form = document.createElement('form')
form.style.display = 'flex'
form.style.flexDirection = 'column'
container.appendChild(form)

//campo de nombre de usuario
const usernameLabel = document.createElement('label')
usernameLabel.textContent = "Nombre de usuario"
const usernameInput = document.createElement('input')
usernameInput.type = 'text'
usernameInput.required = true
form.appendChild(usernameLabel)
form.appendChild(usernameInput)

//campo de nombre de usuario
const passwordLabel = document.createElement('label')
passwordLabel.textContent = "Contraseña"
const passwordInput = document.createElement('input')
passwordInput.type = 'password'
passwordInput.required = true
form.appendChild(passwordLabel)
form.appendChild(passwordInput)

//boton de accion
const submitButton = document.createElement('button')
submitButton.textContent = 'Iniciar Sesion'
form.appendChild(submitButton)

//mensaje
const mensaje = document.createElement('p')
container.appendChild(mensaje)

//DATOS DE INICIO DE SESION PREDEFENIDA
const validarUser = 'Juanito'
const validarPassword = 'Alimaña234'

//validar el username y el password
form.addEventListener('submit', (e) => {
    e.preventDefault()
    //validar el nombre y el pass
    if(validarUser === usernameInput.value && validarPassword === passwordInput.value){
        mensaje.textContent = 'Bienvenido'
        mensaje.style.color = 'green'
    } else {
        mensaje.textContent = 'Error'
        mensaje.style.color = 'red'
    }
})