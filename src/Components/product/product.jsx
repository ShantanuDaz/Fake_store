import React from "react";
import "./product.css";
const Product = ({
  id = 0,
  title = "",
  description = "",
  image = "",
  price = "",
  category = "",
  count = "",
  rate = "",
}) => {
  return (
    <section className="product">
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <div>
        <h4 className="productCategory">{category}</h4>
        <h1>{title}</h1>
        <div className="rate">
          <span>{rate}</span>
        </div>
        <div className="productPrice">
          <p>Price</p>
          <p className="price">{`$${price}`}</p>
        </div>
        <p className="productDes">{description}</p>
        <div className="productOptions">
          <div>Buy Now</div>
          <div>Add To Cart</div>
        </div>
      </div>
    </section>
  );
};

export default Product;
