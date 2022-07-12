import { useState } from "react";
import CartLogo from "../assets/icon-cart.svg";
import Minus from "../assets/icon-minus.svg";
import Plus from "../assets/icon-plus.svg";
import { useShoppingCart } from "../context/ShoppingCartContext";

export const CartButtons: React.FC = () => {
  const [counter, setCounter] = useState<number>(0);
  const { increaseCartQuantity, removeFromCart } = useShoppingCart();

  const handleDecrement: Function = (): void => {
    counter === 0 ? setCounter(0) : setCounter(counter - 1);
  };

  return (
    <div className="btn-container">
      <div className="amount">
        <img onClick={() => handleDecrement()} src={Minus} alt="minus" />
        <p className="counter">{counter}</p>
        <img onClick={() => setCounter(counter + 1)} src={Plus} alt="plus" />
      </div>
      <div className="add-btn" onClick={() => increaseCartQuantity(counter)}>
        <img className="logo" src={CartLogo} alt="cart" />
        <p>Add to cart</p>
      </div>
    </div>
  );
};
