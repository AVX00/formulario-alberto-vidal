import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When it's rendered", () => {
    test("Then it should render the text 'Acceder'", () => {
      const text = "Accider";

      render(<Button />);
      const button = screen.queryByRole("button", text);

      expect(button).toBeInTheDocument();
    });
  });
});
