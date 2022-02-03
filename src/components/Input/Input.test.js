import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from "./Input";

describe("Given a Input component", () => {
  describe("When it's rendered with label name", () => {
    test("Then it should render a label name", () => {
      const text = "name";

      render(<Input label={text}></Input>);
      const label = screen.queryByText(text);

      expect(label).toBeInTheDocument();
    });
  });

  describe("When it's rendered and clicked on it's label", () => {
    test("Then the focus should be in the input", () => {
      const text = "test";

      render(<Input label={text}></Input>);
      const label = screen.queryByText(text);
      const input = screen.queryByPlaceholderText(text);
      userEvent.click(label);

      expect(input).toHaveFocus();
    });
  });

  describe("When it's rendered with type number", () => {
    test("Then an user shouldnt be able to write letters", () => {
      const label = "test";
      const writed = "holahola";
      const type = "number";
      render(<Input type={type} label={label}></Input>);
      const input = screen.queryByPlaceholderText(label);

      userEvent.type(input, writed);

      expect(input.value).toBe("");
    });
  });
});
