import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import jsonData from "../assets/data/products.json";

const ItemDetails = () => {
  const [product, setProduct] = useState({});
  const { itemId } = useParams();

  useEffect(() => {
    const selectedProduct = jsonData.find(
      (item) => item.id === parseInt(itemId)
    );
    setProduct(selectedProduct);
  }, [itemId]);

  return <ItemDetailContainer productData={product} />;
};

export default ItemDetails;
