import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./cart.css";
const Cart = () => {
  const items = useSelector((state) => state.counter.items);
  const [Loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    getProducts(Object.keys(items));
  }, []);

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
  return (
    <>
      Cart
      {products.map((item) => {
        return (
          <div className="cartProduct">
            <div className="cartProductDes">
              <p>{item.title}</p>
              <div style={{ backgroundImage: `url(${item.image})` }}></div>
            </div>
            <div>
              <p>Price</p>
              <p>{`${item.price} X ${items[item.id]} = ${item.price *
                items[item.id]}`}</p>
            </div>
            <div></div>
          </div>
        );
      })}
    </>
  );
};

export default Cart;
