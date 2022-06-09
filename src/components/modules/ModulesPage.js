import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { api } from "../data/api";
import MainHeading from "../layout/headings/MainHeading";
import SecondaryHeading from "../layout/headings/SecondaryHeading";
import ProductList from "./ProductList";

function ModulesPage() {
  const [products, setProducts] = useState(api);

  function toggleFilter(e) {
    if (e.target.checked) {
      const filteredProducts = api.filter(function (item) {
        if (item.inStore > 0) {
          return true;
        }
      });
      setProducts(filteredProducts);
    } else setProducts(api);
  }

  return (
    <Container>
      <Row>
        <Col xs lg={9}>
          <MainHeading title="Product Vault" />
          <p>
            Personlig pleie, skjønnhet og velvære &gt; Helse & pleie &gt;
            Blodtrykksmåler
          </p>
          <SecondaryHeading title="Blodtrykksmåler" />
          <div>
            <p>Filter</p>
            <Form.Check
              type="checkbox"
              id="products--filter"
              label="Vis produkter i butikk"
              onClick={toggleFilter}
            />
          </div>
          <ProductList products={products} />
        </Col>

        <Col lg={3} className="border text-center">
          <Button className="button bg-secondary border-0 mt-5">
            Add new product
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default ModulesPage;
