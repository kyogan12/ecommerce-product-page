import Logo from "../assets/logo.svg";
import Cart from "../assets/icon-cart.svg";
import Avatar from "../assets/image-avatar.png";

export const Nav: React.FC = () => {
  return (
    <nav>
      <div className="link-container">
        <img className="logo" src={Logo} alt="logo" />
        <p className="link">Collections</p>
        <p className="link">Men</p>
        <p className="link">Women</p>
        <p className="link">About</p>
        <p className="link">Contact</p>
      </div>
      <div className="nav-right">
        <img src={Cart} alt="cart" />
        <img className="avatar" src={Avatar} alt="avatar" />
      </div>
    </nav>
  );
};
