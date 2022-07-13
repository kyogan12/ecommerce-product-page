import { Carousel } from "../components/Carousel";
import { Nav } from "../components/Nav";
import { Details } from "../components/Details";
import { CartProvider } from "../context/ShoppingCartContext";
import "../styles/MainPage.css";
import "../styles/MainPageMobile.css";

export const MainPage: React.FC = () => {
  return (
    <CartProvider>
      <Nav />
      <div className="main-cont">
        <Carousel />
        <Details />
      </div>
    </CartProvider>
  );
};
