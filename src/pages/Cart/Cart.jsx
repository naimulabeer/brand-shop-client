import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CartItems from "../../components/CartItems/CartItems";
import "./cart.styles.css";
import { ToastContainer } from "react-toastify";

function Cart() {
  const cartProducts = useLoaderData();
  const [carts, setCarts] = useState(cartProducts);
  return (
    <div className="cart-container">
      <ToastContainer />
      <div className="cart-header">
        <div className="header-block">
          <span>Products</span>
        </div>
        <div className="header-block">
          <span>Name</span>
        </div>
        <div className="header-block">
          <span>Brand</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {carts.length === 0 ? (
        <div className="empty-cart-message">No Products in your cart.</div>
      ) : (
        carts.map((cart) => {
          return (
            <CartItems
              key={cart._id}
              cart={cart}
              carts={carts}
              setCarts={setCarts}
            />
          );
        })
      )}
    </div>
  );
}

export default Cart;
