const Button = ({ type, text }) => {
  return (
    <button className="btn btn-primary row" type={type}>
      {text}
    </button>
  );
};

export default Button;
