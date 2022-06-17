import React from "react";
import { Nav, Tab } from "react-bootstrap";
import SecondaryHeading from "../../layout/headings/SecondaryHeading";
import DeviceDescription from "./DeviceDescription";

function TechnicalTab() {
  return (
    <div>
      <SecondaryHeading title="Technical Documentation (Annex II)" />
      <Tab.Container id="technical" defaultActiveKey="first">
        <Nav variant="pills" className="justify-content-between flex-row">
          <Nav.Item className="navitem--technical">
            <Nav.Link eventKey="first">
              1. DEVICE DESCRIPTION AND SPECIFICATION
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="navitem--technical">
            <Nav.Link eventKey="second">
              2. INFORMATION TO BE SUPPLIED BY THE MANUFACTURER
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="navitem--technical">
            <Nav.Link eventKey="third">
              3. DESIGN AND MANUFACTURING INFORMATION
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="navitem--technical">
            <Nav.Link eventKey="fourth">
              4. GENERAL SAFETY AND PERFORMANCE REQUIREMENTS
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="navitem--technical">
            <Nav.Link eventKey="fifth">
              5. BENEFIT-RISK ANALYSIS AND RISK MANAGEMENT
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="navitem--technical">
            <Nav.Link eventKey="sixth">
              6. PRODUCT VERIFICATION AND VALIDATION
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <hr />

        <Tab.Content>
          <Tab.Pane eventKey="first">
            <DeviceDescription />
          </Tab.Pane>
          <Tab.Pane eventKey="second">2</Tab.Pane>
          <Tab.Pane eventKey="third">3</Tab.Pane>
          <Tab.Pane eventKey="fourth">4</Tab.Pane>
          <Tab.Pane eventKey="fifth">5</Tab.Pane>
          <Tab.Pane eventKey="sixth">6</Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  );
}

export default TechnicalTab;
