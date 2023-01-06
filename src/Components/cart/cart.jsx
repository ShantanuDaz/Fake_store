import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./cart.css";
const Cart = () => {
  const items = useSelector((state) => state.counter.items);
  const [isLoading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [isError, setError] = useState(false);
  useEffect(() => {
    getProducts(Object.keys(items));
  }, [JSON.stringify(items)]);

  const getProducts = (categories) => {
    try {
      let productData = [];
      categories.map(async (item) => {
        const res = await fetch(`https://fakestoreapi.com/products/${item}`);
        const jsonres = await res.json();
        productData.push(jsonres);
        setProducts([...productData]);
        setLoading(false);
      });
    } catch (e) {
      console.error(e);
      setError(true);
    }
  };

  if (isError) {
    return <h1 style={{ color: "red" }}>Error</h1>;
  } else if (isLoading) {
    return <h1>Loading ...</h1>;
  } else
    return (
      <>
        <div className="cart">
          Cart
          {products.map((item) => {
            return (
              <div className="cartProduct">
                <div className="cartProductDes">
                  <abbr title={item.title}>{item.title}</abbr>
                  <div style={{ backgroundImage: `url(${item.image})` }}></div>
                </div>
                <div className="cartProductPrice">
                  <p>Price</p>
                  <p>{`$${item.price} X ${items[item.id]} = $${item.price *
                    items[item.id]}`}</p>
                </div>
                <div></div>
              </div>
            );
          })}
        </div>
      </>
    );
};

export default Cart;
