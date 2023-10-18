import { Link } from "react-router-dom";
import "./product-category.styles.css";

function ProductCategory({ category }) {
  const { brandName, brandImage } = category;
  return (
    <>
      <div className="item-container">
        <div
          className="background-image"
          style={{ backgroundImage: `url(${brandImage})` }}
        ></div>
        <Link to="/productDetails" className="body">
          <h1>{brandName}</h1>
          <p>Shop Now</p>
        </Link>
      </div>
    </>
  );
}

export default ProductCategory;
