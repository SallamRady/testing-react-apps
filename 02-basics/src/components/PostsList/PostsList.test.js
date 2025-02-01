import { render, screen, within } from "@testing-library/react";
import PostsList from "./PostsList";

test("testcase #1 - check component rendered correctlly", () => {
  // render our component
  render(<PostsList />);
  // select elements
  const h1 = screen.getByTestId("posts-list-header");

  // check header rendered successfully
  expect(h1).toBeInTheDocument();
});

// handle any request from module '../api/getPosts.js'
// any request
jest.mock("../../api/getPosts", () => {
  return {
    getPosts: () => [
      { id: 1, title: "post 1", body: "body of post 1" },
      { id: 2, title: "post 1", body: "body of post 1" },
    ],
  };
});

test("testcase #2 - check posts data are fetched and rendered successfully", async () => {
  // render our component
  render(<PostsList />);
  // select elements
  const posts = await screen.findAllByTestId("post-container");

  expect(posts).toHaveLength(2);
});
