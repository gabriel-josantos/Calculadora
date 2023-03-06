function Display(props) {
  return (
    <div className="result-display">
      <div className="operation">{props.displayNum}</div>
      <div className="result">{props.displayResult}</div>
    </div>
  );
}
export default Display;
