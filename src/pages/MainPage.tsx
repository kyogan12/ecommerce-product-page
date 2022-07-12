import { Carousel } from "../components/Carousel";
import { Nav } from "../components/Nav";
import "../styles/MainPage.css";

export const MainPage: React.FC = () => {
  return (
    <div>
      <Nav />
      <Carousel />
    </div>
  );
};
