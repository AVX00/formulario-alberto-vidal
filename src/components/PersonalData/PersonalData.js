import Button from "../Button/Button";
import Form from "../Form/Form";
import Input from "../Input/Input";

const PersonalData = ({ formAction }) => {
  const inputs = [
    { label: "name", type: "text" },
    { label: "last name", type: "text" },
    { label: "birthday", type: "date" },
    { label: "email", type: "email" },
  ];
  const buttonText = "siguiente";
  const buttonType = "submit";

  return (
    <>
      <Form actionOnSubmit={formAction}>
        {inputs.map(({ label, type }, i) => (
          <Input label={label} type={type} key={i} />
        ))}
        <Button type={buttonType} text={buttonText} />
      </Form>
    </>
  );
};

export default PersonalData;
