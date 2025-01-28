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
test("testcase #2 -check if delete btn work correctly", async () => {
  const mockOnDeleteTask = jest.fn();
  const task = { id: 1, name: "Task 1", done: false };

  render(<Item task={task} onDeleteTask={mockOnDeleteTask} />);

  const btn = screen.getByTestId("delete-btn");

  await userEvent.click(btn);

  expect(mockOnDeleteTask).toHaveBeenCalledWith(task);
});

// testcase #3 -check if done btn work correctly
test("testcase #3 -check if done btn work correctly", async () => {
  const mockOnDoneTask = jest.fn();
  const task = { id: 1, name: "Task 1", done: false };
  // render component
  render(<Item task={task} onDoneTask={mockOnDoneTask} />);

  // select and determined
  const doneBtn = await screen.findByTestId("done-btn");

  expect(doneBtn).toBeInTheDocument();

  // click on done task
  await userEvent.click(doneBtn);
  expect(mockOnDoneTask).toHaveBeenCalledWith(task);

  const undoBtn = await screen.findByTestId("undo-btn");

  await userEvent.click(undoBtn);
  expect(mockOnDoneTask).toHaveBeenCalledWith(task);
});

// testcase #4 -check if edit btn work correctly
test("testcase #4 -check if edit btn work correctly", async () => {
  const mockOnEditTask = jest.fn();
  const task = { id: 1, name: "Task 1", done: false };

  render(<Item task={task} onEditTask={mockOnEditTask} />);

  const btn = screen.getByTestId("edit-btn");

  await userEvent.click(btn);

  // check input appear
  const editInput = screen.getByTestId("edit-input");
  expect(editInput).toBeInTheDocument();
  expect(mockOnEditTask).toHaveBeenCalledWith(task);
});


// testcase #5 - check if edit input have value of task name
test("testcase #5 - check if edit input have value of task name", async () => {
  const mockOnEditTask = jest.fn();
  const task = { id: 1, name: "Task 1", done: false };

  render(<Item task={task} onEditTask={mockOnEditTask} />);

  const btn = screen.getByTestId("edit-btn");

  await userEvent.click(btn);

  const editInput = screen.getByTestId("edit-input");

  expect(editInput).toHaveValue('Task 1')
  expect(mockOnEditTask).toHaveBeenCalledWith(task);
});