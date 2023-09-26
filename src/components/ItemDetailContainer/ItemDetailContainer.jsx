import React from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ItemCount from "../ItemCount/ItemCount";

import styles from "./ItemDetailContainer.module.scss";

const ItemDetailContainer = ({ productData }) => {

  const [stock, setStock] = React.useState(10);
  const [onAdd, setOnAdd] = React.useState(false);

  const buttonStyles = {
    backgroundColor: "blue",
  };

  const buttonStylesOnAdd = {
    backgroundColor: "green",
  };


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
        <ItemCount />
        {stock >= 5 ? (
          <strong className=" text-center text-dark fw-normal">Stock disponible</strong>
        ) : (
          <strong>Ultimas unidades disponibles!</strong>
        )}
          <Button className="bg-warning text-white fw-italic mx-auto d-flex mt-3"
          style={onAdd ? buttonStylesOnAdd : buttonStyles}
          onclick={() => {
            setStock (stock - 1);
            setOnAdd (true);
          }}
          >
            Agregar
            </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemDetailContainer;
