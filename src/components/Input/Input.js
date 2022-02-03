const Input = ({ label, type }) => {
  return (
    <div className="row">
      <label className="text-light" htmlFor={label}>
        {label}
      </label>
      <input id={label} name={label} type={type} placeholder={label}></input>
    </div>
  );
};

export default Input;
