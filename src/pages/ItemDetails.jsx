import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";

function getProductById(id) {
  return fetch(`https://dummyjson.com/products/${id}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error fetching product:", error);
    });
}

const ItemDetails = () => {
  const [product, setProduct] = useState({});
  const { itemId } = useParams();

  useEffect(() => {
    getProductById(itemId)
      .then((data) => {
        setProduct(data);
      });
  }, [itemId]);

  return <ItemDetailContainer productData={product} />;
};

export default ItemDetails;
