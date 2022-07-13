import { useState } from "react";
import cartLogo from "../assets/icon-cart.svg";
import minus from "../assets/icon-minus.svg";
import plus from "../assets/icon-plus.svg";
import { useShoppingCart } from "../context/ShoppingCartContext";

export const CartButtons: React.FC = () => {
  const [counter, setCounter] = useState<number>(0);
  const { increaseCartQuantity } = useShoppingCart();

  const handleDecrement: Function = (): void => {
    counter === 0 ? setCounter(0) : setCounter(counter - 1);
  };

  return (
    <div className="btn-container">
      <div className="amount">
        <img onClick={() => handleDecrement()} src={minus} alt="minus" />
        <p className="counter">{counter}</p>
        <img onClick={() => setCounter(counter + 1)} src={plus} alt="plus" />
      </div>
      <div className="add-btn" onClick={() => increaseCartQuantity(counter)}>
        <img className="logo" src={cartLogo} alt="cart" />
        <p>Add to cart</p>
      </div>
    </div>
  );
};
