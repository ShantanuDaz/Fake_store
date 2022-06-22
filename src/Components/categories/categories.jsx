import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const categories = useSelector((state) => state.counter.categories);
  const [selectedCategory, setSelectedCategory] = useState(false);
  let navigate = useNavigate();
  return (
    <>
      <section className="category">
        <h3
          onClick={() => {
            setSelectedCategory(false);
            navigate(`/`);
          }}
          style={selectedCategory ? {} : { color: "green" }}
        >
          All
        </h3>
        {categories.map((item, index) => (
          <h3
            onClick={() => {
              setSelectedCategory(item);
              navigate(`/category/${item}`);
            }}
            key={index}
            style={selectedCategory === item ? { color: "green" } : {}}
          >
            {item}
          </h3>
        ))}
      </section>
    </>
  );
};

export default Categories;
