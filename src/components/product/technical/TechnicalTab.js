import React from "react";
import { Nav, Tab } from "react-bootstrap";

function TechnicalTab() {
  return (
    <Tab.Container id="tabs" defaultActiveKey="dashboard">
      <Nav
        variant="pills"
        className="d-flex justify-content-between flex-row border-top border-bottom mt-3"
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
        <Tab.Pane eventKey="dashboard">
          <TechnicalTab />
        </Tab.Pane>
        <Tab.Pane eventKey="technical">ho</Tab.Pane>
        <Tab.Pane eventKey="risk">ho</Tab.Pane>
        <Tab.Pane eventKey="usability">ho</Tab.Pane>
        <Tab.Pane eventKey="post">ho</Tab.Pane>
      </Tab.Content>
    </Tab.Container>
  );
}

export default TechnicalTab;
