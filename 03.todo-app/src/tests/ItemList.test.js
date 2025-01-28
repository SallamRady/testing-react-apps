import { render, screen } from "@testing-library/react";
import { ItemList } from "../components/ItemList";

// ** Testcases ** //
// testcase #1 - check if component render  tasks when tasks are passed
test("testcase #1 - check if component render  tasks when tasks are passed", () => {
  // render our component
  render(<ItemList tasks={[]} />);

  const tasks = screen.queryAllByTestId("task");

  expect(tasks).toHaveLength(0);
});

// testcase #2 - check if component render 1 task when 1 task is passed
test("testcase #2 - check if component render 1 task when 1 task is passed", () => {
  // render our component
  render(<ItemList tasks={[{ id: 1, name: "Task 1", done: false }]} />);

  const tasks = screen.queryAllByTestId("task");

  expect(tasks).toHaveLength(1);
});

// testcase #3 check if there is no data no data found message appear
test("testcase #3 check if there is no data no data found message appear", async () => {
  // render our component
  render(<ItemList tasks={[]} />);

  const noData = await screen.findByTestId("no-tasks");

  expect(noData).toBeInTheDocument();
});
