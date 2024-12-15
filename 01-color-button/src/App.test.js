import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("button has correct initial color,check after clicked", () => {
  // render component which have elements you will test
  render(<App />);

  // select element with role button and text of 'Change to blue'
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  // expext background of button to be red
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });

  // add click event effect to color button
  fireEvent.click(colorButton);

  // expext background of button to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });

  // expect button text updated to 'Change to red'
  expect(colorButton).toHaveTextContent("Change to red");
});

test("initial condations and check When checkbox is checked, button should be disabled", () => {
  render(<App />);

  // select element with role button and text of 'Change to blue'
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  // make sure color button is enabled
  expect(colorButton).toBeEnabled();

  // select element with role checkbox
  const checkbox = screen.getByRole("checkbox",{name:'Disabled button'});
  // makesure checkbox initial unchecked
  expect(checkbox).not.toBeChecked();

  // check checkbox
  fireEvent.click(checkbox);

  // When checkbox is checked, button should be disabled
  expect(colorButton).toBeDisabled();

});
