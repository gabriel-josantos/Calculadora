function AritimeticButton(props) {
  return (
    <button
      value={props.value}
      className={`key ${props.className}`}
      onClick={props.onAritimeticKey}
    >
      {props.content}
    </button>
  );
}

export default AritimeticButton;
