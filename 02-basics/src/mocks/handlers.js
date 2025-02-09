import { http, HttpResponse } from "msw";

const handlers = [
  http.get("https://jsonplaceholder.typicode.com/posts", () => {
    console.log("Test101001");
    return HttpResponse.json([
      { id: 1, title: "post 1", body: "body of post num 1" },
    ]);
  }),
];

export default handlers;
