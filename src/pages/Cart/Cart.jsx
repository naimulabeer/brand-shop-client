import { useLoaderData } from "react-router-dom";
import CartItems from "../../components/CartItems/CartItems";
import "./cart.styles.css";

function Cart() {
  const cartProducts = useLoaderData();
  return (
    <div className="cart-container">
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
      {cartProducts.map((cart) => {
        return <CartItems key={cart._id} cart={cart} />;
      })}
    </div>
  );
}

export default Cart;
