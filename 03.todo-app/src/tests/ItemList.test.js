import { render, screen } from "@testing-library/react";

import userEvent from "@testing-library/user-event";
import { ItemList } from "../components/ItemList";

// ** Testcases ** //
// testcase #1 - check if component render  tasks when tasks are passed
test("testcase #1 - check if component render  tasks when tasks are passed", () => {
  // render our component
  render(<ItemList tasks={[]} />);

  const tasks = screen.queryAllByTestId('task');

  expect(tasks).toHaveLength(0)
});


// testcase #2 - check if component render 1 task when 1 task is passed
