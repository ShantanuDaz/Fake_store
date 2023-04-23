import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItems, setItems } from "../../Redux/silcer";

import "./cart.css";
const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.counter.items);
  const [isLoading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [isError, setError] = useState(false);
  useEffect(() => {
    let products = Object.keys(items);
    getProducts(products);
  }, [JSON.stringify(items)]);

  const getProducts = (categories = []) => {
    if (categories.length === 0) {
      setLoading(false);
      setProducts([]);
      return;
    }
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
          <h1>Cart</h1>
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
                <div className="cartProductCount">
                  <button
                    className="cartBtn"
                    style={{ "--bg-color": "#efc84a" }}
                    onClick={() => dispatch(setItems(item.id))}
                  >
                    +
                  </button>
                  {items[item.id]}
                  <button
                    className="cartBtn"
                    style={{ "--bg-color": "red" }}
                    onClick={() => dispatch(removeItems(item.id))}
                  >
                    -
                  </button>
                </div>
              </div>
            );
          })}
          <div className="cartPay">
            <button className="pay">
              <h1>BUY</h1>
            </button>
          </div>
        </div>
      </>
    );
};

export default Cart;
