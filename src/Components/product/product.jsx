import React, { useEffect, useState } from "react";
import "./product.css";
import { useParams } from "react-router-dom";

const Product = () => {
  let { productId } = useParams();
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  const [product, setProduct] = useState({
    id: 0,
    title: "",
    description: "",
    image: "",
    price: "",
    category: "",
    count: "",
    rate: "",
  });

  useEffect(() => {
    getProductDetalis();
  });

  const getProductDetalis = async () => {
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
      const jsonres = await res.json();
      let { id, title, description, image, price, category } = jsonres;
      setProduct({
        id,
        title,
        description,
        image,
        price,
        category,
        count: jsonres.rating.count,
        rate: jsonres.rating.rate,
      });
      setLoading(false);
    } catch (e) {
      console.error(e);
      setError(true);
    }
  };
  let { title, description, image, price, category, rate } = product;
  if (isError) {
    return <div>Error</div>;
  } else if (isLoading) {
    return <h1>Loading ...</h1>;
  } else
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
