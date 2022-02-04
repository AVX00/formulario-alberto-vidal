const Input = ({ label, type }) => {
  return (
    <>
      <label className="text-light col" htmlFor={label}>
        {label}
      </label>
      <input
        className="col-10"
        id={label}
        name={label}
        type={type}
        placeholder={label}
      ></input>
    </>
  );
};

export default Input;
