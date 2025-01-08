import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SummaryForm from "../SummaryForm";

test("initial conditions", () => {
  // render our component
  render(<SummaryForm />);
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

test("Checkbox disables button on first click and enables on second click", async () => {
  // render our component
  render(<SummaryForm />);
  // declare and define elements
  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  const confirmButton = screen.getByRole("button", {
    name: /confirm order/i,
  });

  // first click
  await userEvent.click(checkbox);
  // fireEvent.click(checkbox);
  expect(confirmButton).toBeEnabled();
  // second click
  await userEvent.click(checkbox);
  // fireEvent.click(checkbox);
  expect(confirmButton).toBeDisabled();
});

// test("popover responds to hover", async () => {
//   // render our component
//   render(<SummaryForm />);

//   // popover starts out hidden - makesure popover is not in document initially
//   const nullPopover = screen.queryByText(
//     /No ice cream will actually be delivered/i
//   );
//   expect(nullPopover).not.toBeInTheDocument();

//   // popover appears on mouseover of checkbox label
//   const termsAndConditions = screen.getByText(/terms and conditions/i);
//   await userEvent.hover(termsAndConditions);
//   const popover = screen.queryByText(
//     /No ice cream will actually be delivered/i
//   );
//   expect(popover).toBeInTheDocument();

//   // popover disappears when we mouse out
//   await userEvent.unhover(termsAndConditions);
//   expect(popover).not.toBeInTheDocument();
// });

test("popover responds to hover", async () => {
  // Render our component
  render(<SummaryForm />);

  // Popover starts out hidden - make sure popover is not in document initially
  const nullPopover = screen.queryByText(
    /No ice cream will actually be delivered/i
  );
  expect(nullPopover).not.toBeInTheDocument();

  // Popover appears on mouseover of checkbox label
  const termsAndConditions = screen.getByText(/terms and conditions/i);
  await userEvent.hover(termsAndConditions);

  // Wait for the popover to appear
  const popover = await screen.findByText(
    /No ice cream will actually be delivered/i
  );
  expect(popover).toBeInTheDocument();

  // Popover disappears when we mouse out
  await userEvent.unhover(termsAndConditions);

  // Re-query to ensure the popover is no longer in the document
  const popoverAfterUnhover = await screen.findByText(
    /No ice cream will actually be delivered/i
  );
  // expect(popoverAfterUnhover).not.toBeInTheDocument();
});
