import { useShoppingCart } from "../context/ShoppingCartContext";
import cartThumbnail from "../assets/image-product-1-thumbnail.jpg";
import bin from "../assets/icon-delete.svg";

export const InsideCart: React.FC = () => {
  const { getItemQuantity, removeFromCart } = useShoppingCart();
  const quantity = getItemQuantity();

  return (
    <>
      <div className="inside-cart">
        <img src={cartThumbnail} alt="thumbnail" />
        <div>
          <p className="cart-name">Fall Limited Edition Sneakers</p>
          <p>
            $125.00 x {quantity}
            <b className="bold-price"> ${125 * quantity}</b>
          </p>
        </div>
        <img
          alt="bin"
          onClick={() => removeFromCart()}
          src={bin}
          className="bin"
        />
      </div>
      <div className="checkout-cart">
        <p>Checkout</p>
      </div>
    </>
  );
};
