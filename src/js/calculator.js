let currentNumber = '';
let previousNumber = '';
let operation = null;

function appendNumber(number) {
  if (currentNumber.length >= 10) return; // Limit input length
  currentNumber += number;
  updateDisplay();
}

function setOperation(op) {
  if (currentNumber === '') return;
  if (previousNumber !== '') calculate();
  operation = op;
  previousNumber = currentNumber;
  currentNumber = '';
  updateDisplay();
}

function calculate() {
  let result;
  const prev = parseFloat(previousNumber);
  const curr = parseFloat(currentNumber);
  if (isNaN(prev) || isNaN(curr)) return;

  switch (operation) {
    case '+':
      result = prev + curr;
      break;
    case '-':
      result = prev - curr;
      break;
    case '*':
      result = prev * curr;
      break;
    case '/':
      result = curr !== 0 ? prev / curr : 'Error';
      break;
    default:
      return;
  }

  currentNumber = result.toString();
  operation = null;
  previousNumber = '';
  updateDisplay();
}

function clearDisplay() {
  currentNumber = '';
  previousNumber = '';
  operation = null;
  updateDisplay();
}

function updateDisplay() {
  const display = document.getElementById('display');
  if (operation) {
    display.textContent = `${previousNumber} ${operation} ${currentNumber}`;
  } else {
    display.textContent = currentNumber || previousNumber || '0';
  }
}