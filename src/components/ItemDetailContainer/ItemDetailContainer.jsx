import React from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import styles from "./ItemDetailContainer.module.scss";

const ItemDetailContainer = ({ productData }) => {
  return (
    <div className={`d-flex justify-content-center ${styles.productContainer}`}>
 
      <Card style={{ width: "18rem" }} className="mx-auto text-center mt-5 mb-5">
      
        <Card.Img variant="top" src={productData.images} />
        <Card.Body>
          <Card.Title>{productData.title}</Card.Title>
          <Card.Text>{productData.description}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush mx-auto-text-center">
          <ListGroup.Item>Precio: ${productData.price}</ListGroup.Item>
          <ListGroup.Item>Calificación: {productData.rating}</ListGroup.Item>
          <ListGroup.Item>Stock: {productData.stock}</ListGroup.Item>
       
        </ListGroup>
        <Card.Body>
          <Button className="bg-warning text-danger mx-auto">Agregar al carrito</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemDetailContainer;
