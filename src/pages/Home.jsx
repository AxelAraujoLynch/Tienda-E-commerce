import React, { useState, useEffect } from "react";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import LoaderComponent from "../components/LoaderComponent/LoaderComponent";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulamos una demora de carga
    setTimeout(() => {
      // Importa directamente el archivo JSON
      import("../assets/data/products.json")
        .then((data) => {
          setProducts(data.default); // data.default contiene el arreglo de productos
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error al cargar los productos:", error);
          setLoading(false);
        });
    }, 1000); // Simulamos una demora de 1 segundo
  }, []);

  return loading ? (
    <LoaderComponent />
  ) : (
    <div>
      <h1>Lista de Productos</h1>
      <ItemListContainer productsData={products} />
    </div>
  );
}

export default Home;
