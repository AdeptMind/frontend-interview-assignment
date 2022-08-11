# Frontend Interview Project

## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Overview

The primary objective of this take home interview is to prepare a product page for an arbitrary product. The data for the products is mocked after our internal product api, and has been provided through the api routes.

The product data is structured to support 2 levels of a hierarchy, product models, and model variants. A model can be though of as a distinct but related product. An example would include, different colors of a shirt. Each model will have one or more variants. These include variations on sizes. The default models and variants are the first in the list.

Changes will be made within `pages/index.tsx` and supporting components.

You will be allowed to use npm packages including but not limited to:

- Styling:

  - emotion
  - styled-components
  - tailwind

- State management:

  - redux
  - react (built in context)

- Utilities:

  - lodash
  - classnames

However, usage of UI frameworks such as bootstrap, material-ui etc. are discouraged.

## Styling

Next.js comes with module support

## Requirements

Designs can be found [here](https://www.figma.com/file/57cwyw2ugQYjqynHcQOcaz/Front-End-Interview-Mock?node-id=0%3A1). Try to match the solution as closely as possible to these designs. The site should be responsive and interpolate between the desktop and mobile designs in a reasonable manner.

> Note: For the sake of brevity, some boilerplate code has been written already. We are also omitting the 'in stock' display as well as the 'image carousel'.

- Update the styles of the `ProductHead` component to match the designs.

- Update the `ProductPrice` component, which displays the price of the product, to match the designs. Add a hook that takes the price and sale price as input and outputs the formatted price and sale price, as well as the savings percent.

- Update the `ButtonGroup` and `Button` component to match the designs.

- Modify the `Dropdown` component to match the style of the designs.

- Modify the `RoundedButton` component to match the styles from the designs.

- Modify the existing component `ExpansionPanel` to follow the style of the mocks. Add an arrow icon which displays downward when the panel is closed, upwards otherwise. Animations welcome!

- Update the `[productId].tsx` page to memorize the colors and sizes of the product using `useMemo`. Also, add a `useEffect` to to set the initial state of the `selectedColor` and `selectedSize` variables instead of doing it in the initializer.

- Include as many supporting components as you would like. The requirements are simply a guideline!

## Deliverable

Once you are satisfied with your code, please zip the contents and submit via email.

We will be interested in reviewing code based on the following criteria:

- Code is written in a style that is easy to read and understand.
- Code is performant within the scope of the requirements.
- Product page is accessible and SEO friendly.
- Complex code is documented, where needed.
- Product page matches design within a reasonable degree of accuracy.
- Dependencies are not overused.
- Semantic HTML elements are used where appropriate.

## Api

```
GET /api/products - List all products
GET /api/products/:id - Get a product by id, returns 404 if not found
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
