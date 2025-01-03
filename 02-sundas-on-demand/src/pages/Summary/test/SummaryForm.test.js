import { render, screen, fireEvent } from "@testing-library/react";
import SummaryFrom from "../SummaryForm";

test("initial conditions", () => {
  // render our component
  render(<SummaryFrom />);
  // declare and define elements
  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  const confirmButton = screen.getByRole("button", {
    name: /confirm order/i,
  });

  // checkbox be unchecked initially
  expect(checkbox).not.toBeChecked();

  // confirm button be disabiled initially
  expect(confirmButton).toBeDisabled();
});

test("Checkbox disables button on first click and enables on second click", () => {
  // render our component
  render(<SummaryFrom />);
  // declare and define elements
  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  const confirmButton = screen.getByRole("button", {
    name: /confirm order/i,
  });

  // first click
  fireEvent.click(checkbox);
  expect(confirmButton).toBeEnabled();
  // second click
  fireEvent.click(checkbox);
  expect(confirmButton).toBeDisabled();
});
