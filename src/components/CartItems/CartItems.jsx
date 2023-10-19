/* eslint-disable react/prop-types */
import { CiCircleRemove } from "react-icons/ci";
import "./cart-items.styles.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CartItems({ cart, carts, setCarts }) {
  const { _id, name, image, type, price } = cart;

  const handleRemove = (_id) => {
    fetch(`http://localhost:5000/cart/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Deleted from Cart!", {
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          const remaining = carts.filter((cart) => cart._id !== _id);
          setCarts(remaining);
        }
      });
  };

  return (
    <>
      <div className="cart-item-container">
        <div className="image-container">
          <img src={image} alt={name} />
        </div>
        <span className="name">{name}</span>
        <span className="type">{type}</span>
        <span className="price">{price}</span>
        <div className="remove-button" onClick={() => handleRemove(_id)}>
          <CiCircleRemove />
        </div>
      </div>
    </>
  );
}

export default CartItems;
