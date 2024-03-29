import React, { useEffect, useState } from "react";
import "./dashboard.css";
import Card from "./card/card";
import CardLayout from "./cardLayout/cardLayout";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  let navigate = useNavigate();

  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  const [categoriesData, setCategoriesData] = useState([]);
  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products/categories");
      const jsonres = await res.json();
      getProducts(jsonres);
    } catch (e) {
      console.error(e);
      setError(true);
    }
  };
  const getProducts = (categories) => {
    try {
      let productData = [];
      categories.map(async (item) => {
        const res = await fetch(
          `https://fakestoreapi.com/products/category/${item}?limit=4`
        );
        const jsonres = await res.json();
        productData.push({
          name: item,
          data: jsonres,
        });
        setCategoriesData([...productData]);
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
        {categoriesData.map((item, index) => {
          return (
            <section className="categories" key={index}>
              <h1
                onClick={() => navigate(`/category/${item.name}`)}
              >{`${item.name} >`}</h1>
              <CardLayout>
                {item.data.map((item1, index1) => {
                  return (
                    <Card
                      key={index1}
                      image={item1.image}
                      title={item1.title}
                      description={item1.description}
                      price={item1.price}
                      id={item1.id}
                      category={item1.category}
                      rate={item1.rating.rate}
                      count={item1.rating.count}
                      classname="card"
                      onClick={() => navigate(`/product/${item1.id}`)}
                    />
                  );
                })}
              </CardLayout>
            </section>
          );
        })}
      </>
    );
};

export default Dashboard;
