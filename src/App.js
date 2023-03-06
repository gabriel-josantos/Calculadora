import { useState } from 'react';
import Calculator from './components/Calculator';
import CalculatorProvider from './components/context/CalculatorProvider';
import SimpleCalculator from './components/SimpleCalculator';

function App() {
  const [isCalculatorSimple, setIsCalculatorSimple] = useState(true);

  function toggleCalculator() {
    isCalculatorSimple
      ? setIsCalculatorSimple(false)
      : setIsCalculatorSimple(true);
  }

  return (
    <CalculatorProvider>
      {isCalculatorSimple && <SimpleCalculator onToggle={toggleCalculator} />}
      {!isCalculatorSimple && <Calculator onToggle={toggleCalculator} />}
    </CalculatorProvider>
  );
}

export default App;
