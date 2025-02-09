MSW Docs
Three steps to get started with Mock Service Worker.
#1-Installation--->npm install msw@latest --save-dev
#2-Describe
Next, you describe the network using Request handlers

```
import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("https://jsonplaceholder.typicode.com/posts", () => {
    return HttpResponse.json([
        { title: "post 1", body: "body of post num 1" }
    ]);
  }),
];

```
#3-Integrate
MSW integrates with any frameworks, request libraries, and other tools because it applies itself on the environment level, which means you only have to decide whether you want to use it in the browser or in a Node.js process (or both). You still (re)use the same request handlers regardless of the environment you are in.

For this tutorial, let’s integrate MSW into a plain Node.js process by creating a Node.js integration module called node.js:
```
import { setupServer } from "msw/node";
import { handlers } from "./handlers";

export const server = setupServer(...handlers);

```

-> The node.js integration module we’ve created configures MSW to run in any Node.js process but doesn’t actually start it just yet. To start the request interception, you need to call server.listen() in your Node.js process: