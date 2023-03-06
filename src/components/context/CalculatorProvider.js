import { useState } from 'react';
import CalculatorContext from './calculator-context';

import operationsLogic from './operationsLogic/operationsLogic';

function CalculatorProvider(props) {

  
  const [calculatorDisplay, setCalculatorDisplay] = useState('');
  const [operationResult, setOperationResult] = useState('');

  function numericHandler(e) {
    const calculatorDisplayStr = '' + calculatorDisplay + e.target.value;
    setCalculatorDisplay(calculatorDisplayStr);
  }

  function aritimeticHandler(e) {
    const calculatorDisplayStr = '' + calculatorDisplay + e.target.value;
    setCalculatorDisplay(calculatorDisplayStr);
  }

  function ansKeyHandler() {
    setCalculatorDisplay(operationResult);
    setOperationResult('');
  }

  function resetOperationHandler(e) {
    setCalculatorDisplay('');
    setOperationResult('');
  }
  function removeCharacterHandler(e) {
    setCalculatorDisplay(
      calculatorDisplay.replace(
        calculatorDisplay[calculatorDisplay.length - 1],
        ''
      )
    );
  }

  function operationHandler() {
    const calculatorArr = calculatorDisplay.split('');

    const parenthesisArr =
      operationsLogic.createParenthesisArray(calculatorArr);

    const parenthesisResult = operationsLogic.doOperation(parenthesisArr);
    const finalResult = operationsLogic.doOperation(
      calculatorArr,
      parenthesisResult
    );

    setOperationResult(finalResult);
  }

  const calculatorContext = {
    calculatorDisplay: calculatorDisplay,
    operationResult: operationResult,
    onNumericKey: numericHandler,
    onAritimeticKey: aritimeticHandler,
    onEquals: operationHandler,
    onRemoveCharacter: removeCharacterHandler,
    onReset: resetOperationHandler,
    onAnswerKey: ansKeyHandler,
  };

  return (
    <CalculatorContext.Provider value={calculatorContext}>
      {props.children}
    </CalculatorContext.Provider>
  );
}

export default CalculatorProvider;
