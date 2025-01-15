import { render, screen } from "@testing-library/react";
import Welcome from "./Welcome";

test("Welcome test with username sallam", () => {
  // render our component
  render(<Welcome username="sallam" />);
  // find and select element
  const text = screen.getByText(/welcome sallam/i);
  // set testing condation
  expect(text).toBeInTheDocument();
});
