import Logo from "../assets/logo.svg";
import Cart from "../assets/icon-cart.svg";
import Avatar from "../assets/image-avatar.png";
import { useShoppingCart } from "../context/ShoppingCartContext";

export const Nav: React.FC = () => {
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
        <div>
          {quantity}
          <img className="cart" src={Cart} alt="cart" />
        </div>
        <img className="avatar" src={Avatar} alt="avatar" />
      </div>
    </nav>
  );
};
