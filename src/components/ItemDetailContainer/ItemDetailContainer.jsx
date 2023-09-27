import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ItemCount from "../ItemCount/ItemCount";

import styles from "./ItemDetailContainer.module.scss";

const ItemDetailContainer = ({ productData }) => {
  return (
    <div className={`d-flex justify-content-center ${styles.productContainer}`}>
      <Card
        style={{ width: "18rem" }}
        className="mx-auto text-center mt-5 mb-5"
      >
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
          <ItemCount />
          {productData.stock >= 5 ? (
            <strong className=" text-center text-dark fw-normal">
              Stock disponible
            </strong>
          ) : (
            <strong className=" text-center text-dark fw-normal">
              Ultimas unidades disponibles!
            </strong>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemDetailContainer;
