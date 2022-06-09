import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { api } from "../../data/api";
import MainHeading from "../layout/headings/MainHeading";
import SecondaryHeading from "../layout/headings/SecondaryHeading";
import ProductList from "./ProductList";

function ModulesPage() {
  const [products, setProducts] = useState(api);

  return (
    <Container>
      <Row>
        <Col>
          <MainHeading title="Product Vault" />
          <p>
            Personlig pleie, skjønnhet og velvære &gt; Helse & pleie &gt;
            Blodtrykksmåler
          </p>
          <SecondaryHeading title="Blodtrykksmåler" />
          <ProductList products={products} />
        </Col>

        <Col>1 of 3</Col>
      </Row>
    </Container>
  );
}

export default ModulesPage;
