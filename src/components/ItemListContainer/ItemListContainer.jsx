import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styles from "./ItemListContainer.module.scss";


const ItemListContainer = ({ productsData }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.productContainer}>
      {productsData.map((product) => {
        return (
          <Card style={{ width: "18rem" }} key={product.id}>
            {/* Utiliza la primera imagen del campo "images" en lugar de un solo valor */}
            <Card.Img variant="top" src={product.images} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Card.Text>Precio: ${product.price}</Card.Text>
              <Card.Text>Calificación: {product.rating}</Card.Text>
              <Button
                variant="primary"
                onClick={() => navigate(`/item/${product.id}`)}
              >
                Detalles
              </Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default ItemListContainer;
