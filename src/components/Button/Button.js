const Button = ({ type, text }) => {
  return (
    <button className="btn btn-primary col" type={type}>
      {text}
    </button>
  );
};

export default Button;
