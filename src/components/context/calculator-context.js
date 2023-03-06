import React from 'react';

const CalculatorContext = React.createContext({
  calculatorDisplay: '',
  operationResult: '',
  onNumericKey: () => {},
  onAritimeticKey: () => {},
  onEquals: () => {},
  onRemoveCharacter: () => {},
  onReset: () => {},
  onAnswerKey: () => {},
});

export default CalculatorContext;
