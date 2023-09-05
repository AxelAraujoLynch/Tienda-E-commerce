import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import LoaderComponent from "../components/LoaderComponent/LoaderComponent";
import productsData from "../assets/data/products.json"; // Importa los datos del archivo JSON

const Category = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    // Filtra los productos del archivo JSON según la categoría
    const filteredProducts = productsData.filter(
      (product) => product.category === categoryId
    );

    setProducts(filteredProducts);
    setLoading(false);
  }, [categoryId]);

  return loading ? (
    <LoaderComponent />
  ) : (
    <ItemListContainer productsData={products} />
  );
};

export default Category;
