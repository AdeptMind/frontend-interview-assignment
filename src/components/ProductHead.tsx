import productHeadStyles from "./ProductHead.module.scss";

interface ProductHeadProps {
  brand: string;
  title: string;
}

export const ProductHead = (props: ProductHeadProps) => {
  return (
    <>
      <h2 className={productHeadStyles["product-head-brand"]}>{props.brand}</h2>
      <h1 className={productHeadStyles["product-head-title"]}>{props.title}</h1>
    </>
  );
};
