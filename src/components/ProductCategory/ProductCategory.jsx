import { Link } from "react-router-dom";
import PropTypes from "prop-types";

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
        <Link to={`/productPage/${brandName}`} className="body">
          <h1>{brandName}</h1>
          <p>Shop Now</p>
        </Link>
      </div>
    </>
  );
}

ProductCategory.propTypes = {
  category: PropTypes.shape({
    brandName: PropTypes.string.isRequired,
    brandImage: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCategory;
