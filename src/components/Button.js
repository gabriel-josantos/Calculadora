function Button(props) {
  return (
    <button
      value={props.value}
      className={`key ${props.className}`}
      onClick={props.onClick}
    >
      {props.content}
    </button>
  );
}
export default Button;
