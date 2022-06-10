import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { api } from "../data/api";
import MainHeading from "../layout/headings/MainHeading";

function ProductPage() {
  const [pictureIndex, setPictureIndex] = useState(0);
  const { id } = useParams("/");

  return (
    <Row>
      <Col xs md={7}>
        <p>All &gt; Blodtrykksmåler</p>
        <MainHeading title={api[id].title} />
        <img src={api[id].img} className="w-100" />
      </Col>
      <Col xs md={5}>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>(a) General description of the device</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>(b) UDI-DI/UDI-PI</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
        </Form>
      </Col>
    </Row>
  );
}

export default ProductPage;
