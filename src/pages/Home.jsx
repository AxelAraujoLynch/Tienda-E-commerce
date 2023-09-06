import React, { useState, useEffect } from "react";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import LoaderComponent from "../components/LoaderComponent/LoaderComponent";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      import("../assets/data/products.json")
        .then((data) => {
          setProducts(data.default);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error al cargar los productos:", error);
          setLoading(false);
        });
    }, 1000);
  }, []);

  return loading ? (
    <LoaderComponent />
  ) : (
    <div>
      <h1 className="d-flex justify-content-center" id="TituloHome">
        Lista de Productos
      </h1>
      <ItemListContainer productsData={products} />
    </div>
  );
}

export default Home;
