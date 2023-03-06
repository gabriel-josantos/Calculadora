import React, { useContext, useState } from 'react';
import AritimeticButton from './AritimeticButton';
import Display from './Display';
import styles from './Calculator.module.css';
import NumericButton from './NumericButton';
import Button from './Button';
import CalculatorContext from './context/calculator-context';

function SimpleCalculator(props) {
  const calculatorCtx = useContext(CalculatorContext);

  return (
    <div className={styles['calculator-container']}>
      <div className="user-photo"></div>
      <Display
        displayNum={calculatorCtx.calculatorDisplay}
        displayResult={calculatorCtx.operationResult}
      />
      <div className="keys-box_simple">
        <Button
          className="reset-key operator"
          content="C"
          value="C"
          onClick={calculatorCtx.onReset}
        />
        <Button
          className="remove-key operator"
          content={<span className="material-symbols-outlined">backspace</span>}
          onClick={calculatorCtx.onRemoveCharacter}
        />
        <Button
          className="answer-key operator"
          content="ANS"
          value="ANS"
          onClick={calculatorCtx.onAnswerKey}
        />
        <AritimeticButton
          className="division-key operator"
          content="/"
          value="/"
          onAritimeticKey={calculatorCtx.onAritimeticKey}
        />
        <NumericButton
          className="seven-key main-key"
          content="7"
          value={7}
          onNumericKey={calculatorCtx.onNumericKey}
        />
        <NumericButton
          className="eight-key main-key"
          content="8"
          value={8}
          onNumericKey={calculatorCtx.onNumericKey}
        />
        <NumericButton
          className="nine-key main-key"
          content="9"
          value={9}
          onNumericKey={calculatorCtx.onNumericKey}
        />
        <AritimeticButton
          className="multiply-key operator"
          content="*"
          value="*"
          onAritimeticKey={calculatorCtx.onAritimeticKey}
        />
        <NumericButton
          className="four-key main-key"
          content="4"
          value={4}
          onNumericKey={calculatorCtx.onNumericKey}
        />
        <NumericButton
          className="five-key main-key"
          content="5"
          value={5}
          onNumericKey={calculatorCtx.onNumericKey}
        />
        <NumericButton
          className="six-key main-key"
          content="6"
          value={6}
          onNumericKey={calculatorCtx.onNumericKey}
        />
        <AritimeticButton
          className="minus-key operator"
          content="-"
          value="-"
          onAritimeticKey={calculatorCtx.onAritimeticKey}
        />
        <NumericButton
          className="one-key main-key"
          content="1"
          value={1}
          onNumericKey={calculatorCtx.onNumericKey}
        />
        <NumericButton
          className="two-key main-key"
          content="2"
          value={2}
          onNumericKey={calculatorCtx.onNumericKey}
        />
        <NumericButton
          className="three-key main-key"
          content="3"
          value={3}
          onNumericKey={calculatorCtx.onNumericKey}
        />
        <AritimeticButton
          className="plus-key operator"
          content="+"
          value="+"
          onAritimeticKey={calculatorCtx.onAritimeticKey}
        />
        <Button
          className="simplify-key operator"
          onClick={props.onToggle}
          content={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"
              />
            </svg>
          }
        />
        <NumericButton
          className="zero-key main-key"
          content="0"
          value={0}
          onNumericKey={calculatorCtx.onNumericKey}
        />
        <NumericButton
          className="comma-key main-key"
          content="."
          value="."
          onNumericKey={calculatorCtx.onNumericKey}
        />
        <Button
          className="key equal-key"
          content="="
          onClick={calculatorCtx.onEquals}
        />
      </div>
    </div>
  );
}

export default SimpleCalculator;
