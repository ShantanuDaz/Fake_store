import React, { useEffect, useState } from "react";
import "./dashboard.css";
import Card from "./card/card";
import CardLayout from "./cardLayout/cardLayout";
import Product from "./product/product";
const Dashboard = () => {
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  const [categoriesData, setCategoriesData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(false);
  useEffect(() => {
    getCategories();
    fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: new Headers({ "content-type": "application/json" }),
      body: JSON.stringify({
        username: "johnd",
        password: "m38rmF$",
      }),
    })
      .then((res) => res.json())
      .then((json) => console.log(json))
      .catch((e) => console.error(e));
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

  const getSelectedCategoryProducts = async (category) => {
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
      setSelectedProduct(false);
      setSelectedCategory(productData);
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
        <section className="category">
          <h3
            onClick={() => {
              setSelectedCategory(false);
              setSelectedProduct(false);
            }}
            style={selectedCategory ? {} : { color: "green" }}
          >
            All
          </h3>
          {categoriesData.map((item, index) => (
            <h3
              onClick={() => getSelectedCategoryProducts(item.name)}
              key={index}
              style={
                selectedCategory.name === item.name ? { color: "green" } : {}
              }
            >
              {item.name}
            </h3>
          ))}
        </section>
        {selectedProduct ? (
          <>
            <Product
              image={selectedProduct.image}
              title={selectedProduct.title}
              description={selectedProduct.description}
              price={selectedProduct.price}
              id={selectedProduct.id}
              category={selectedProduct.category}
              rate={selectedProduct.rating.rate}
              count={selectedProduct.rating.count}
            />
          </>
        ) : (
          <>
            {selectedCategory ? (
              <>
                <section className="selectedCategory">
                  <h1>{selectedCategory.name}</h1>
                  <CardLayout type="multiRow">
                    {selectedCategory.data.map((item1, index1) => {
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
                          onClick={() => setSelectedProduct(item1)}
                        />
                      );
                    })}
                  </CardLayout>
                </section>
              </>
            ) : (
              categoriesData.map((item, index) => {
                return (
                  <section className="categories" key={index}>
                    <h1
                      onClick={() => getSelectedCategoryProducts(item.name)}
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
                            onClick={() => setSelectedProduct(item1)}
                          />
                        );
                      })}
                    </CardLayout>
                  </section>
                );
              })
            )}
          </>
        )}
      </>
    );
};

export default Dashboard;
