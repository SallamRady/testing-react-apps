import { render, screen } from "@testing-library/react";

import userEvent from "@testing-library/user-event";

import { ItemForm } from "../components/ItemForm";

// ** test cases ** //
// test case#1 - item form rendered correctly
test("Testcase #1 item form rendered correctly", () => {
  // render our component
  render(<ItemForm />);
  // declare element
  const formTitle = screen.getByTestId("app-title");
  const taskName = screen.getByTestId("task-name");
  const addBtn = screen.getByTestId("task-add-btn");

  // check elements in the doc
  expect(formTitle).toBeInTheDocument();
  expect(taskName).toBeInTheDocument();
  expect(addBtn).toBeInTheDocument();
});

// test case#2 - when user type ,input value will change
test("Testcase#2 - when user type ,input value will change", async () => {
  // render our component
  render(<ItemForm />);
  // declare element
  const taskName = screen.getByTestId("task-name");

  // check
  /**
   * userEvent.type simulate when user type on input filed note syntax
   * userEvent.type(element,'string which u simulate you write')
   */
  await userEvent.type(taskName, "task 1");
  expect(taskName).toHaveValue("task 1");
});

// test case#3 - check error message displayed when input value is empty
test("Testcase #3 - check error message displayed when input value is empty", async () => {
  // declare mockOnAddTaskFn
  const mockOnAddTaskFn = jest.fn();
  
  // render our component
  render(<ItemForm onAddTask={mockOnAddTaskFn} />);

  // declare element
  const addBtn = screen.getByTestId("task-add-btn");

  // check
  await userEvent.click(addBtn);

  const errorMsg = await screen.findByTestId("error-message");

  expect(errorMsg).toBeInTheDocument();
});
// test case#4 - check if item added to list when user click on add button

// test case#5 - check if input cleared after item added

// test case#6 - check if item deleted to list when user click on delete button
