  import React from "react";
  import { Button } from "react-bootstrap";
  import Card from "react-bootstrap/Card";
  import ListGroup from "react-bootstrap/ListGroup";

  const ItemDetailContainer = ({ productData }) => {
    return (
      <Card style={{ width: "18rem" }}>
        {/* Aquí se utiliza la propiedad "images" en lugar de "thumbnail" */}
        <Card.Img variant="top" src={productData.images} />
        <Card.Body>
          <Card.Title>{productData.title}</Card.Title>
          <Card.Text>{productData.description}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Precio: ${productData.price}</ListGroup.Item>
          <ListGroup.Item>Calificación: {productData.rating}</ListGroup.Item>
          <ListGroup.Item>Stock: {productData.stock}</ListGroup.Item>
          {/* Agrega más detalles según sea necesario */}
        </ListGroup>
        <Card.Body>
          <Button>Agregar al carrito</Button>
        </Card.Body>
      </Card>
    );
  };

  export default ItemDetailContainer; 