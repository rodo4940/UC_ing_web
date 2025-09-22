function message(){
    alert("Hola Jodi como te encuetras")
}

function addContent() {
    let data = document.getElementById("container")
    data.innerHTML="<b>Hola Jodi<>"
    data.innerHTML='<img src="img/machupicchu.jpg" alt="" srcset="" width="300px">'
}
function greeting() {
    let data = document.getElementById("inputGreeting")
    // alert("Hola, "+data)
    alert("Hello,"+ data.value)
}
function addNumbers() {
    let number1 = document.getElementById("number1")
    let number2 = document.getElementById("number2")
    let result = document.getElementById("result")
    let calcResult = parseInt(number1.value) + parseInt(number2.value)
    result.innerText=calcResult   
}