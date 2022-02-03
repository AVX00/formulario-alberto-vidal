const Input = ({ label, type }) => {
  return (
    <>
      <label htmlFor={label}>{label}</label>
      <input id={label} name={label} type={type} placeholder={label}></input>);
    </>
  );
};

export default Input;
