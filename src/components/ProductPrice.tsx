/**
 * TODO: Style as the designs
 * TODO: Move price formatting/business logic into a hook that provides formatted pricing, and percent price values
 */

interface ProductPriceProps {
  price: number;
  salePrice: number;
}

export const ProductPrice = (props: ProductPriceProps) => {
  return (
    <div>
      <span>${props.price}</span>
      {props.price !== props.salePrice && <span>${props.salePrice}</span>}
      {props.price !== props.salePrice && (
        <span>Save {(100 * props.salePrice) / props.price}%</span>
      )}
    </div>
  );
};
