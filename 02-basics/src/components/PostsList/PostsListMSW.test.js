import { render, screen } from "@testing-library/react";
import PostsList from "./PostsList";
import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";

const url = "https://jsonplaceholder.typicode.com/posts";

// set our msw handlers
const handlers = [
  http.get(url, ({ request }) => {
    return HttpResponse.json([{ title: "post 1", body: "body of post num 1" }]);
  }),
];

// create server
const server = setupServer(...handlers);

// set server configration
beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

test("test fetching data via MSW package", async () => {
  render(<PostsList />);

  setTimeout(async () => {
    const posts = await screen.findAllByTestId("post-container");
    expect(posts).toHaveLength(1);
  }, 2500);
});
