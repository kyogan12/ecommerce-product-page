import Logo from "../assets/logo.svg";
import Cart from "../assets/icon-cart.svg";
import Avatar from "../assets/image-avatar.png";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { useState } from "react";
import { InsideCart } from "./InsideCart";

export const Nav: React.FC = () => {
  const [showCart, setShowCart] = useState<boolean>(false);
  const { getItemQuantity } = useShoppingCart();
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
                <InsideCart />
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
