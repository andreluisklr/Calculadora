let displayP = document.querySelector('.display p');
const teclado = document.querySelector('.teclado');
const body = document.body;

let calcular = '';
let arrayCalcular;

body.addEventListener('keypress', (e) => {
  if (e.keyCode == 99) {
    if (calcular != '') {
      calcular = '';
      displayP.innerText = calcular;
    }
  }
})

teclado.addEventListener('click', function(e) {
  let tecla = e.target.value;

  if (tecla == '=' && calcular != '' && typeof tecla != 'undefined') {
    calcular = String(eval(calcular));
  }
  else if (tecla == 'DEL' && calcular != '' && typeof tecla != 'undefined') {
    arrayCalcular = calcular.split('');
    arrayCalcular.pop();

    calcular = arrayCalcular.join('');
  }
  else if (tecla != 'DEL' && tecla != '=' && typeof tecla != 'undefined') {
    calcular = calcular + tecla;
  }

  displayP.innerText = calcular;
});




