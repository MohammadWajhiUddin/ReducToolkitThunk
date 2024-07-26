import React, { useEffect } from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";


import { useSelector, useDispatch } from "react-redux";
import { ProductApi } from "../features/ProductsSlice";

const AllProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products?.Products || []); // Ensure products is an array

  useEffect(() => {
    if (products.length === 0) {
      // Fetch products only if not already loaded
      dispatch(ProductApi());
    }
  }, [dispatch, products.length]);

  const truncateDescription = (text, length) => {
    if (!text) return ""; // If text is undefined or null, return an empty string
    if (text.length <= length) return text;
    return text.substring(0, length) + "...";
  };

  return (
    <Container style={{ marginTop: 20 }}>
      <Row className="g-4">
        {products.length === 0 ? (
          <h1>Loading...</h1>
        ) : (
          products[0].map((product) => (
            <Col key={product.id} sm={6} md={4} lg={3}>
              <Card style={{ width: "100%", marginBottom: "1rem" }}>
                <Card.Img
                  variant="top"
                  src={product.image}
                  style={{ height: "200px" }}
                />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>
                    {truncateDescription(product.description, 100)}
                  </Card.Text>
                  <Card.Text>
                    <strong>Price: ${product.price}</strong>
                  </Card.Text>
                  <Card.Text>
                    Rating: {product?.rating?.rate} (from {product?.rating?.count}{" "}
                    reviews)
                  </Card.Text>
                  <Link to={`/ProductDetails/${product.id}`}>
                    <Button variant="primary" style={{ width: "100%" }}>
                      View Details
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};

export default AllProducts;
