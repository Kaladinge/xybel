import React, { useState } from "react";
import { Col, Form, Nav, Row, Tab, TabContent, Tabs } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { api } from "../data/api";
import MainHeading from "../layout/headings/MainHeading";
import TertiaryHeading from "../layout/headings/TertiaryHeading";
import TechnicalTab from "./technical/TechnicalTab";

function ProductPage() {
  const [pictureIndex, setPictureIndex] = useState(0);
  const { id } = useParams("/");

  return (
    <>
      <Row className="product">
        <Col xs md={7}>
          <p>All &gt; Blodtrykksmåler</p>
          <MainHeading title={api[id].title} />
          <Row>
            <Col xs={3} className="bg-white">
              {api[id].img.map(function (item, index) {
                return (
                  <img
                    key={index}
                    src={item}
                    onClick={() => setPictureIndex(index)}
                    className={`w-100 product--subimage ${
                      pictureIndex === index
                        ? "product--subimage-active"
                        : "none"
                    }`}
                  />
                );
              })}
            </Col>
            <Col xs={9}>
              <img
                src={api[id].img[pictureIndex]}
                className="product--mainimage w-100"
              />
            </Col>
          </Row>
        </Col>
        <Col xs md={5}>
          <Form className="mt-5">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="email" placeholder="some text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>(a) General description of the device</Form.Label>
              <Form.Control type="email" placeholder="some text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>(b) UDI-DI/UDI-PI</Form.Label>
              <Form.Control type="email" placeholder="some text" />
            </Form.Group>
          </Form>
        </Col>
      </Row>

      <Tab.Container id="tabs" defaultActiveKey="dashboard">
        <Nav
          variant="pills"
          className="d-flex justify-content-between flex-row border-top border-bottom mt-3 mb-3"
        >
          <Nav.Item>
            <Nav.Link eventKey="dashboard">Dashboard</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="technical">Technical documentation</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="risk">Risk Management</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="usability">Usability Engineering</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="post">Post Market Surveillance</Nav.Link>
          </Nav.Item>
        </Nav>

        <Tab.Content>
          <Tab.Pane eventKey="dashboard">jo</Tab.Pane>
          <Tab.Pane eventKey="technical">
            <TechnicalTab />
          </Tab.Pane>
          <Tab.Pane eventKey="risk">ho</Tab.Pane>
          <Tab.Pane eventKey="usability">ho</Tab.Pane>
          <Tab.Pane eventKey="post">ho</Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </>
  );
}

export default ProductPage;
