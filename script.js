let resultField = document.getElementById('result');

function appendNumber(number) {
  resultField.value += number;
}

function appendOperator(operator) {
  const lastChar = resultField.value.slice(-1);
  if ("+-*/".includes(lastChar)) return; // Avoid double operators
  resultField.value += operator;
}

function calculate() {
  try {
    let result = eval(resultField.value);
    resultField.value = result;
  } catch (error) {
    resultField.value = 'Error';
  }
}

function clearResult() {
  resultField.value = '';
}
