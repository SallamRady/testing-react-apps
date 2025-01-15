import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  // 1- render our component
  render(<App />);

  // 2- select and determined element from jsdom
  const linkElement = screen.getByText(/learn react/i);

  // 3- set test conditipons
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveAttribute("href");
});
