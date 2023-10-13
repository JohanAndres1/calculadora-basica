// Variables para definir el elemento del HTML que estamos llamando
let display = '' // Variable para mantener el contenido que se muestra en la calculadora.
const num0 = document.getElementById('0')
const num1 = document.getElementById('1')
const num2 = document.getElementById('2')
const num3 = document.getElementById('3')
const num4 = document.getElementById('4')
const num5 = document.getElementById('5')
const num6 = document.getElementById('6')
const num7 = document.getElementById('7')
const num8 = document.getElementById('8')
const num9 = document.getElementById('9')
const buttonResult = document.getElementById('igual')
const pantalla = document.getElementById('resultado')
const borrar = document.getElementById('delete')
const buttonSuma = document.getElementById('+')
const buttonResta = document.getElementById('-')
const buttonMultiplicar = document.getElementById('*')
const buttonDividir = document.getElementById('/')

// Eventos que se hacen caundo damos click a un boton
num0.addEventListener('click', function () {
    addToDisplay('0')
})
num1.addEventListener('click', function () {
    addToDisplay('1')
})
num2.addEventListener('click', function () {
    addToDisplay('2')
})
num3.addEventListener('click', function () {
    addToDisplay('3')
})
num4.addEventListener('click', function () {
    addToDisplay('4')
})
num5.addEventListener('click', function () {
    addToDisplay('5')
})
num6.addEventListener('click', function () {
    addToDisplay('6')
})
num7.addEventListener('click', function () {
    addToDisplay('7')
})
num8.addEventListener('click', function () {
    addToDisplay('8')
})
num9.addEventListener('click', function () {
    addToDisplay('9')
})
buttonSuma.addEventListener('click', function () {
    addToDisplay('+')
})
buttonResta.addEventListener('click', function () {
    addToDisplay('-')
})
buttonDividir.addEventListener('click', function () {
    addToDisplay('/')
})
buttonMultiplicar.addEventListener('click', function () {
    addToDisplay('*')
})
buttonResult.addEventListener('click', calculateResult)
borrar.addEventListener('click', clearDisplay)


// Funciones para cada parte de los eventos
function addToDisplay(value) {
    display += value
    pantalla.value = display
}

function clearDisplay() {
    display = ''
    pantalla.value = display
}

function calculateResult() {
    try {
        display = eval(display) // Evalúa la expresión matemática ingresada por el usuario.
        pantalla.value = display
    } catch (error) {
        pantalla.value = 'Error'
    }
}