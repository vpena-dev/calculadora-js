const display = document.getElementById('display');

function appendToDisplay(input) {
  if (display.value === 'Operação inválida.') {
    display.value = input;
  } else {
    display.value += input;
  }
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Operação inválida.';
  }
}
