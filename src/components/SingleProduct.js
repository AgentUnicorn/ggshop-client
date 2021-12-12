import React from 'react'
import { Card, Button } from "react-bootstrap";
import defaultIMG from './ProductSection/images/default.jpg'


export default function SingleProduct(p) {
  return (
          <Card style={{ width: "15rem", margin: "20px" }}>
            <Card.Img variant="top" src={p.image? p.image: defaultIMG} />
            <Card.Body>
              <Card.Title>{p.fullname}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Detail</Button>
              <Button variant="warning" className="mx-3">Update</Button>
            </Card.Body>
          </Card>
  )
}
