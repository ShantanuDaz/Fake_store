import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "./card/card";
import CardLayout from "./cardLayout/cardLayout";
import { useNavigate } from "react-router-dom";

const ProductDashboard = () => {
  let navigate = useNavigate();
  let { category } = useParams();
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  useEffect(() => {
    getSelectedCategoryProducts();
  }, []);

  const getSelectedCategoryProducts = async () => {
    try {
      let productData = {};
      setLoading(true);
      const res = await fetch(
        `https://fakestoreapi.com/products/category/${category}`
      );
      const jsonres = await res.json();
      productData = {
        name: category,
        data: jsonres,
      };
      setData(productData);
      setLoading(false);
    } catch (e) {
      console.error(e);
      setError(true);
    }
  };
  if (isError) {
    return <div>Error</div>;
  } else if (isLoading) {
    return <h1>Loading ...</h1>;
  } else
    return (
      <>
        <section className="selectedCategory">
          <h1>{data.name}</h1>
          <CardLayout type="multiRow">
            {data.data.map((item1, index1) => {
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
      </>
    );
};

export default ProductDashboard;
