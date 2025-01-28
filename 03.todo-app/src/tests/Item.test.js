import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Item } from "../components/Item";
// ** testcases ** //
// testcase #1 -check if component render 1 item
test("testcase #1 -check if component render 1 item", () => {
  render(<Item task={{ id: 1, name: "Task 1", done: false }} />);

  const task = screen.getByTestId("item-task");

  expect(task).toBeInTheDocument();
});
// testcase #2 -check if delete btn work correctly
// testcase #3 -check if done btn work correctly
// testcase #4 -check if edit btn work correctly
