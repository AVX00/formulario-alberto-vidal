const Form = ({ children, actionOnSubmit }) => {
  const submitAction = (event) => {
    event.preventDefault();
    actionOnSubmit();
  };

  return <form onSubmit={submitAction}>{children}</form>;
};
export default Form;
