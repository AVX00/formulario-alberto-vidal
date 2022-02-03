import { fireEvent, render, screen } from "@testing-library/react";
import Form from "./Form";

describe("Given a Form component", () => {
  describe("When it's rendered passing an action", () => {
    test("then it the action should be called on submit", () => {
      const action = jest.fn();
      const text = "test";

      render(<Form actionOnSubmit={action}>{text}</Form>);
      fireEvent.submit(screen.queryByText(text));
      expect(action).toHaveBeenCalled();
    });
  });
});
