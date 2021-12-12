import React from "react";
import { Card, Button } from "react-bootstrap";
import defaultIMG from "./ProductSection/images/default.jpg";

export default function SingleProduct(p) {
  
  return (
    <Card className="mx-3 mt-5" style={{border: "1px solid rgba(0,0,0,.125)"}}>
      <Card.Img variant="top" src={p.imageURL ? p.imageURL : defaultIMG} fluid />
      <Card.Body>
        <Card.Title>{p.type? p.type : "mouse"} {p.name}</Card.Title>
        <Card.Text><small style={{color:"rgba(0,0,0,.3)"}}>{p.brand}</small></Card.Text>
        <Card.Text>
          {p.description}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="bg-white">
        <Card.Text><span className="text-danger font-weight-bold">{p.price} {p.currency} </span></Card.Text>
      </Card.Footer>
      <Card.Footer className="text-center">
        <Button variant="primary">Detail</Button>
        <Button variant="warning" className="mx-3">
          Update
        </Button>
      </Card.Footer>
    </Card>
  );
}
