import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MainHeading from "../layout/headings/MainHeading";
import SecondaryHeading from "../layout/headings/SecondaryHeading";

function ModulesPage() {
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
        </Col>

        <Col>1 of 3</Col>
      </Row>
    </Container>
  );
}

export default ModulesPage;
