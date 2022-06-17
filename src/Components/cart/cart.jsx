import React from "react";
import { useSelector } from "react-redux";
const Cart = () => {
  const items = useSelector((state) => state.counter.items);
  return (
    <>
      {items.map((item) => {
        return <p>{item.title}</p>;
      })}
    </>
  );
};

export default Cart;
