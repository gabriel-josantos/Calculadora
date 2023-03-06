const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => (a * b).toFixed(2);
const divide = (a, b) => (a / b).toFixed(2);
const exponential = (a, b) => Math.pow(a, b);
// const root = (a, b) => Math.sqrt(a, b).toFixed(2);

function decision(symbol) {
  switch (symbol) {
    case '+':
      return sum;
    case '-':
      return subtract;
    case '*':
      return multiply;
    case '/':
      return divide;
    case '^':
      return exponential;
    // case '√':
    //   return root;
    default:
      console.log('Invalid symbol');
      break;
  }
}
////////////////////////////////////////////////////////

function doOperation(charArray, parenthesisResult) {
  const symbols = [];
  const numbers = [];
  let isInsideParenthesis = false;
  let typedNumber = '';

  charArray.forEach(char => {
    if (char == '(') {
      isInsideParenthesis = true;
      numbers.push(parenthesisResult);
    }

    if (!isInsideParenthesis) {
      if ((char >= 0 && char <= 9) || char == '.') {
        typedNumber += char + '';
      } else {
        numbers.push(typedNumber);
        symbols.push(char);
        typedNumber = '';
      }
    }

    if (char == ')') {
      isInsideParenthesis = false;
    }
  });

  if (typedNumber) {
    const lastTypedNumber = typedNumber;
    numbers.push(lastTypedNumber);
  }

  // console.log(numbers);
  // console.log(symbols);

  let result = +numbers[0];

  symbols.forEach((symbol, i) => {
    result = decision(symbol)(result, +numbers[i + 1]);
  });
  return result;
}
/////////////////////////////////////////////////

function createParenthesisArray(calculatorArr) {
  const parenthesisArr = [];
  let isInsideParenthesis = false;

  calculatorArr.forEach(char => {
    if (char == ')') {
      isInsideParenthesis = false;
    }

    if (isInsideParenthesis) {
      parenthesisArr.push(char);
    }
    if (char == '(') {
      isInsideParenthesis = true;
    }
  });
  return parenthesisArr;
}

export default { doOperation, createParenthesisArray };
