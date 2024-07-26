import React from "react";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { SingleProductApi } from "../features/ProductsSlice";
import TopNavbar from "./TopNavbar";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.SingleProduct);
  const loading = useSelector((state) => state.products.loading);

  React.useEffect(() => {
    dispatch(SingleProductApi(id));
  }, [dispatch]);

  console.log("Single Product", product);
  return (
    <>
      {loading === true ? (
        <>
          <TopNavbar />
          <h1>Loading ,,,</h1>
        </>
      ) : (
        <>
                  <TopNavbar />

          <Container style={{ marginTop: 20 }}>
           <Card>
            <Row>
              <Col md={6}>
                <Card.Img
                  variant="top"
                  src={product?.image}
                  style={{ width: "100%", height: "auto" }}
                />
              </Col>
              <Col md={6} >
                <Card.Body>
                  <Card.Title>{product?.title}</Card.Title>
                  <Card.Text>
                    <strong>Description:</strong> {product?.description}
                  </Card.Text>
                  <Card.Text>
                    <strong>Price:</strong> ${product?.price}
                  </Card.Text>
                  <Card.Text>
                    <strong>Category:</strong> {product?.category}
                  </Card.Text>
                  <Card.Text>
                    <strong>Rating:</strong> {product?.rating?.rate} / 5
                  </Card.Text>
                  <Card.Text>
                    <strong>Number of Reviews:</strong> {product?.rating?.count}
                  </Card.Text>
                  <Button variant="primary" style={{width:'100%'}}>Add to Cart</Button>
                </Card.Body>
              </Col>
            </Row>
            </Card>
          </Container>
        </>
      )}
    </>
  );
};

export default ProductDetails;
