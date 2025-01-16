import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";

describe("counter actions tests", () => {
  test.skip("counter initial value to be 0", () => {
    // render our component
    render(<Counter />);
    // select our elements from dom
    const counter = screen.getByTestId("counter");

    // make sure initial valie of counter is zero
    expect(counter).toHaveTextContent("0");
  });

  test.only("Up counter button test", () => {
    // render our component
    render(<Counter />);
    // select our elements from dom
    const counter = screen.getByTestId("counter");
    const up = screen.getByTestId("counter-up");

    // make sure initial valie of counter is zero
    expect(counter).toHaveTextContent("0");

    // check when click on increase btn -> counter will increase
    fireEvent.click(up);
    expect(counter).toHaveTextContent("1");
  });

  test("down counter button test", () => {
    // render our component
    render(<Counter />);
    // select our elements from dom
    const counter = screen.getByTestId("counter");
    const down = screen.getByTestId("counter-down");

    // make sure initial valie of counter is zero
    expect(counter).toHaveTextContent("0");

    // check when click on decrease btn -> counter will decrease
    fireEvent.click(down);
    expect(counter.innerHTML).toMatch("-1");
  });
});
