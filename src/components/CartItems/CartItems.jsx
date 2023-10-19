/* eslint-disable react/prop-types */
import { CiCircleRemove } from "react-icons/ci";
import "./cart-items.styles.css";

function CartItems({ cart }) {
  const { name, image, type, price } = cart;

  return (
    <>
      <div className="cart-item-container">
        <div className="image-container">
          <img src={image} alt={name} />
        </div>
        <span className="name">{name}</span>
        <span className="type">{type}</span>
        <span className="price">{price}</span>
        <div className="remove-button">
          <CiCircleRemove />
        </div>
      </div>
    </>
  );
}

export default CartItems;
