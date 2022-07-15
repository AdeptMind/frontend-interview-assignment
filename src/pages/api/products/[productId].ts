// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Product } from "../../../types/product";

import { PRODUCT_API_DATA } from "../../../constants/api-data";

interface NotFoundResponse {
  error: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product | NotFoundResponse>
) {
  const productId = req.query.productId as string;
  const found = PRODUCT_API_DATA.find((prod) => prod.product_id === productId);

  if (!found) {
    res.status(404).json({
      error: "Product not found",
    });
  } else {
    res.status(200).json(found);
  }
}
