import { CartButtons } from "./CartButtons";

export const Details: React.FC = () => {
  return (
    <div className="info-cont">
      <h3 className="company-details">SNEAKER COMPANY</h3>
      <h1 className="shoe-name">Fall Limited Edition Sneakers</h1>
      <p className="shoe-info">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      <div className="price-cont">
        <h2 className="discounted-price">$125.00</h2>
        <p className="discount-percentage">50%</p>
      </div>
      <h3 className="old-price">$250.00</h3>
      <CartButtons />
    </div>
  );
};
