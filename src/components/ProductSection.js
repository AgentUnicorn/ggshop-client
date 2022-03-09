import React from "react";
import { Button, Container, Row, CardGroup } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";
// import { useQueryParam, NumberParam } from "use-query-params";

export default function ProductSection() {
  const [page, setPage] = useState(() => {
    return 1;
  });
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = (page) => {
      axios
        .get(`${process.env.REACT_APP_API_URL}/products?page=${page}`)
        .then((res) => {
          console.log(res);
          let productsArray = res.data;
          setProducts(productsArray);
          console.log(products);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getProducts(page);
  }, [page]);

  if(products.length === 0) {
    return (
      <div>
        <h1>Oops no more product</h1>
      </div>
    )
  } else {
    return (
      <div>
        <Container>
          <Row>
            <CardGroup>
              {products && products.map((p) => <SingleProduct {...p} />)}
            </CardGroup>
          </Row>
          <Row className="flex mx-auto w-25">
            <Button 
              variant="primary"
              className="w-50 my-5"
              onClick={() => setPage(page - 1)}
              disabled = {page === 1}
            >
              Previous
            </Button>
            <Button 
              variant="primary"
              className="w-50 my-5"
              onClick={() => setPage(page + 1)}
            >
              Next
            </Button>
          </Row>
        </Container>
      </div>
    );
  }
}

