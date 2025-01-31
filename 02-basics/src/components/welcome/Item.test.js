import { render, screen, within } from "@testing-library/react";
import Item from "./Item";


// custom matcher
const toContainCount = (container, role, count = 1) => {
  // select all elements in container
  const eles = within(container).getAllByRole(role);

  // condition
  if (eles.length === count) return { pass: true };

  return {
    pass: false,
    message: () =>
      `expected ${container} to have ${count} but found ${eles.length}`,
  };
};

// custom matcher must accept container element
expect.extend({ toContainCount });




test("check btns count in specific div", () => {
  const item = { title: "item 1", description: "item 1 description" };

  render(<Item item={item} />);

  const btns = screen.getAllByRole("button");
  const btnsContainer = screen.getByTestId("btns-container");
  const btnsInContainer = within(btnsContainer).getAllByRole("button");

  expect(btnsInContainer).toHaveLength(3);

  expect(btns).toHaveLength(5);

  expect(btnsContainer).toContainCount('button',3);
});