# Frontend Interview Project

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Overview

The primary objective of this take home interview is to prepare a product page for an arbitrary product. The data for the products is mocked after our internal product api, and has been provided through the api routes.

The product data is structured to support 2 levels of a hierarchy, product models, and model variants. A model can be though of as a distinct but related product. An example would include, different colors of a shirt. Each model will have one or more variants. These include variations on sizes. The default models and variants are the first in the list.

Changes will be made within `pages/index.tsx` and supporting components.

## Requirements

Designs can be found [here](https://www.figma.com/file/57cwyw2ugQYjqynHcQOcaz/Front-End-Interview-Mock?node-id=0%3A1). Try to match the solution as closely as possible to these designs. The site should be responsive and interpolate between the desktop and mobile designs in a reasonable manner.

Some elements can remain static such as availability, add to cart and contact buttons, and the disclaimer. However, the product image selector, details expansion panel, model and variant selector should be dynamic.

- Create a new component called `ProductImages` which displays all of the images for the product in a scrollable interface on the left, and displays the primary, selected, image on the right.

- Display the product store, and title. (Can be separate component or inline)

- Create a new component called `ProductPrice` which displays the price of the product. If it is on sale, it will display the sale price, the percent savings and the original price (strikethrough).

- Create the variant selector component, which allows users to switch between a product model.

- Create a new component called `Dropdown`. This component should be generic, and will be used to display the options within the selected models variants.

- Add a new button component called `Button` which can be used to display the `Add to Cart` and `Contact Store` buttons.

- Create a new component called `ExpansionPanel` which can be used to display the description of the product. By default the description is hidden, and can be toggled between open and closed by clicking on the panel.

- Create any other components required to complete the designs, some content can be inlined if it is simple enough.

## Deliverable

Once you are satisfied with your code, please zip the content and submit via email.

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
