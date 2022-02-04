const Form = ({ children, actionOnSubmit }) => {
  const submitAction = (event) => {
    event.preventDefault();
    actionOnSubmit();
  };

  return (
    <form onSubmit={submitAction} className="form row">
      {children}
    </form>
  );
};
export default Form;
