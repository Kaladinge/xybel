import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import TertiaryHeading from "../layout/headings/TertiaryHeading";

export default function ProductList({ products }) {
  return (
    <Row>
      {products.map((item) => (
        <Col xs={12} md={6} lg={4} key={item.title} className="border bg-white">
          <Link to={`/product/${item.id}`}>
            <img src={item.img} alt="product" className="w-100" />
            <TertiaryHeading title={item.title} />
            <p>{item.price}</p>
            <p className="text-success">På nettlager ({item.inStore}+)</p>
          </Link>
        </Col>
      ))}
    </Row>
  );
}
