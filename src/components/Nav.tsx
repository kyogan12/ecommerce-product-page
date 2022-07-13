import logo from "../assets/logo.svg";
import cart from "../assets/icon-cart.svg";
import avatar from "../assets/image-avatar.png";
import menu from "../assets/icon-menu.svg";
import close from "../assets/icon-close.svg";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { useState } from "react";
import { InsideCart } from "./InsideCart";
import { DashboardLinks } from "./DashboardLinks";

export const Nav: React.FC = () => {
  const [showCart, setShowCart] = useState<boolean>(false);
  const [mobileLinks, setMobileLinks] = useState<boolean>(false);
  const { getItemQuantity } = useShoppingCart();
  const quantity = getItemQuantity();

  return (
    <nav>
      {mobileLinks && (
        <div className="mobile-dashboard">
          <img
            className="close-menu"
            onClick={() => setMobileLinks(!mobileLinks)}
            src={close}
            alt="close"
          />
          <DashboardLinks />
        </div>
      )}
      <div className="link-container">
        <img
          onClick={() => setMobileLinks(!mobileLinks)}
          src={menu}
          alt="phone-menu"
          className="phone-menu"
        />
        <a href="/">
          <img className="logo" src={logo} alt="logo" />
        </a>
        <DashboardLinks />
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
            src={cart}
            alt="cart"
          />
          <p className="quantity">{quantity}</p>
        </div>
        <img className="avatar" src={avatar} alt="avatar" />
      </div>
    </nav>
  );
};
