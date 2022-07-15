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

## Requirements

Designs can be found [here](https://www.figma.com/file/57cwyw2ugQYjqynHcQOcaz/Front-End-Interview-Mock?node-id=0%3A1). Try to match the solution as closely as possible to these designs. The site should be responsive and interpolate between the desktop and mobile designs in a reasonable manner.

Some elements can remain static such as availability, the add to cart button, the contact button, and the disclaimer. However, the product image selector, details expansion panel, model and variant selector should be dynamic as described below.

- Create a new component called `ImageGallery` which displays all of the images for the product in a scrollable interface on the left, and displays the primary, selected, image on the right. Selecting an image from the list should update the selected image and display the thumbnail with a border. The component should allow scrolling through all thumbnails, in the case where there are too many images to display on one screen.

- Display the product store, and title. (Can be separate component or inline).

- Create a new component called `ProductPrice` which displays the price of the product. If it is on sale, it will display the sale price, the percent savings and the original price (strikethrough). Otherwise, is should just display the price.

- Create a `ButtonGroup` component, which allows users to switch between a product model (i.e. Colour). Updating the model switch the model that is displayed.

- Create a new component called `Dropdown`. This component should be generic, and will be used to display the options within the selected models variants (ie Sizes). Selecting a variant does not need to update anything on the page.

- Add a new button component called `Button` which can be used to display the `Add to Cart` and `Contact Store` buttons. These do not have to perform any actions.

- Create a new component called `ExpansionPanel` which can be used to display the description of the product. By default the description is hidden, and can be toggled between open and closed by clicking on the panel.

- Create any other components required to complete the designs, some content can be inlined if it is simple enough.

- Feel free to modify some of the data in order to test any features, however, the structure should not be changed.

- Include as many supporting components as you would like. The requirements are simply a guideline!

## Deliverable

Once you are satisfied with your code, please zip the contents and submit via email. Do not include the `.git`, `.next`, `node_modules` or other git-ignored directories to reduce the size of the zip.

We will be interested in reviewing code based on the following criteria:

- Code is written in a style that is easy to read and understand.
- Code is performant within the scope of the requirements.
- Product page is accessible and SEO friendly.
- Directory structure is easily understandable and scalable.
- Complex code is documented, where needed. (why not how)
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
