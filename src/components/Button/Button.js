const Button = ({ type, text }) => {
  return (
    <button className="btn" type={type}>
      {text}
    </button>
  );
};

export default Button;
