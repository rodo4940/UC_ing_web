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
    let calcResult = parseInt(number1.value) / parseInt(number2.value)
    result.value=calcResult
    if(parseInt(number2.value)<=0){
        Swal.fire({
            title: "ERROR",
            text: "No se puede divider por 0",
            icon: "error"
          });
    }else{
        Swal.fire({
            title: "RESULTADO",
            text: "El resultado de la divicion es: " + calcResult,
            icon: "success"
          });
    }
}
function beautifulAlert() {
    Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
      });
}


const ctx = document.getElementById('myChart');

// 
new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});