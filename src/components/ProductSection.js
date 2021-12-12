import React from "react";
import { Button, Container, Row, Card } from "react-bootstrap";
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

  return (
    <div>
      <Container>
        <Row>{products && products.map((p) => <SingleProduct {...p} />)}</Row>
        <Row>
          <Button
            variant="primary"
            className="w-50 flex justify-content-center my-5"
            onClick={() => setPage(page + 1)}
          >
            Next
          </Button>
        </Row>
      </Container>
    </div>
  );
}

// const Product = ({ name, brand, type }) => (
  
//     <SingleProduct name={name} />
  
// );
