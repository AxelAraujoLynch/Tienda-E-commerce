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
          <Card className="mx-auto text-center mb-5" style={{ width: "18rem" }} key={product.id}>
        
            <Card.Img variant="top" src={product.images} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Card.Text>Precio: ${product.price}</Card.Text>
              <Card.Text>Calificación: {product.rating}</Card.Text>
              <Button id="Detalles" className=" mx-auto text-center bg-succes text-danger"
                variant="warning"
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
