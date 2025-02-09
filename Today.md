# react information

من ضمن الامور المهمة جدا فى الرياكت موضوع ال lazy loading for images
دا ممكن نعمله باكتر من وسيلة
1 - using loading props in img tag like that ::

```
<img loading='lazy' ...
```

2- use package :: React Lazy Load Image Component
steps to use it

- installation :: npm i react-lazy-load-image-component
- if using ts :: npm i @types/react-lazy-load-image-component
- in src/index.tsx add :: `import "react-lazy-load-image-component/src/effects/blur.css";`
- to lazy loading image using :: LazyLoadImage

```
 <LazyLoadImage
    src={src}
    alt={alt}
    effect="blur" // Other effects: opacity, black-and-white
    width="100%"
    height="auto"
  />
```

- Implement Lazy Loading for Background Image use ::LazyLoadComponent ,example ::

```js
<LazyLoadComponent>
  <div
    style={{
      width: "100%",
      height: "100vh",
      backgroundImage: `url(${imageUrl})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      transition: "background-image 0.5s ease-in-out",
    }}
  />
</LazyLoadComponent>
```

# Testing with Next

1- Installation

```
npm install -D vitest @vitejs/plugin-react jsdom @testing-library/react @testing-library/dom vite-tsconfig-paths
```

2-Create a vitest.config.mts|js file in the root of your project, and add the following options:

```ts
// vitest.config.mts
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: "jsdom",
  },
});
```

3-Then, add a test script to your package.json in screpts section :

```json
"scripts": {
    /* ... */
    "test": "vitest"
}
```

4- Creating your first Vitest Unit Test
<!-- in -> app/page.tsx -->
```ts
import Link from 'next/link'
 
export default function Page() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/about">About</Link>
    </div>
  )
}
```

<!-- in-> aapp/page.test.tsx  -->
```ts
import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page from '../app/page'
 
test('Page', () => {
  render(<Page />)
  expect(screen.getByRole('heading', { level: 1, name: 'Home' })).toBeDefined()
})
```