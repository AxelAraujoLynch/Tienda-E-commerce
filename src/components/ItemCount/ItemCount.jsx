import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

const ItemCount = () => {
  const [count, setCount] = useState(0); //
  const { cartItems, setCartItems } = useContext(CartContext);

  const handleAddProduct = () => {
    setCartItems(cartItems + 1);
    setCount(count + 1);
  };
  const handleRemoveProduct = () => {
    if (cartItems > 0) {
      setCartItems(cartItems - 1);
      setCount(count - 1);
    }
  };

  return (
    <div className="text-dark fw-italic" >
      <button className="bg-danger text-white fw-italic btn-lg" onClick={handleRemoveProduct}>Quitar</button>
      <label style={{ margin:20, fontSize: "1.5rem", fontWeight: "italic" }}>
        {count}
      </label>
      <button className="bg-success text-white fw-italic btn-lg" onClick={handleAddProduct}>Agregar</button>
    </div>
  );
};

export default ItemCount;