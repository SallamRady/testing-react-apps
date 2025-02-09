import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node"; // Use setupServer for Jest
import { render, screen } from "@testing-library/react";
import PostsList from "./PostsList";

// Mock API handlers
const handlers = [
  http.get("https://jsonplaceholder.typicode.com/posts", () => {
    return HttpResponse.json([
      { id: 1, title: "post 1", body: "body of post num 1" },
    ]);
  }),
];

// Setup mock server
const server = setupServer(...handlers);

// Start and stop server before and after tests
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers()); // Reset handlers between tests
afterAll(() => server.close());

test("fetching data via MSW package", async () => {
  render(<PostsList />);

  // Verify mock data is rendered
  const posts = await screen.findAllByTestId("post-container");
  expect(posts).toHaveLength(1);
});
