import React, { useEffect, useState } from "react";
import "./dashboard.css";
import Card from "./card/card";
import CardLayout from "./cardLayout/cardLayout";
const Dashboard = () => {
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const jsonres = await res.json();
      setData(jsonres);
      setLoading(false);
    } catch (e) {
      console.error(e);
      setError(true);
    }
  };

  if (isError) {
    return <div>Error</div>;
  } else if (isLoading) {
    return <h1>Loading</h1>;
  } else
    return (
      <>
        <CardLayout type="multiRow">
          {data.map((item, index) => {
            return (
              <Card
                key={index}
                image={item.image}
                title={item.title}
                description={item.description}
                price={item.price}
                id={item.id}
                category={item.category}
                rate={item.rating.rate}
                count={item.rating.count}
                classname="card"
              />
            );
          })}
        </CardLayout>
      </>
    );
};

export default Dashboard;
