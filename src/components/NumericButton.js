function NumericButton(props) {
  return (
    <button
      value={props.value}
      className={`key ${props.className}`}
      onClick={props.onNumericKey}
    >
      {props.content}
    </button>
  );
}
export default NumericButton;
