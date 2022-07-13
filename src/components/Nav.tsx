import Logo from "../assets/logo.svg";
import Cart from "../assets/icon-cart.svg";
import Avatar from "../assets/image-avatar.png";
import cartThumbnail from "../assets/image-product-1-thumbnail.jpg";
import bin from "../assets/icon-delete.svg";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { useState } from "react";

export const Nav: React.FC = () => {
  const [showCart, setShowCart] = useState<boolean>(false);
  const { getItemQuantity, removeFromCart } = useShoppingCart();
  const quantity = getItemQuantity();

  return (
    <nav>
      <div className="link-container">
        <a href="/">
          <img className="logo" src={Logo} alt="logo" />
        </a>
        <p className="link">Collections</p>
        <p className="link">Men</p>
        <p className="link">Women</p>
        <p className="link">About</p>
        <p className="link">Contact</p>
      </div>
      <div className="nav-right">
        <div className="cart">
          {showCart && (
            <div className="cart-items">
              <p className="cart-items-p">Cart</p>
              {quantity === 0 ? (
                <p className="empty-cart">Your cart is empty.</p>
              ) : (
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
              )}
            </div>
          )}
          <img
            onClick={() => setShowCart(!showCart)}
            className="cart-icon"
            src={Cart}
            alt="cart"
          />
          <p className="quantity">{quantity}</p>
        </div>
        <img className="avatar" src={Avatar} alt="avatar" />
      </div>
    </nav>
  );
};
