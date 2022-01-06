import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiFilezilla,
  SiPostman,
  SiHeroku,
  SiEclipseide
} from "react-icons/si";
import {
  FaSourcetree
} from "react-icons/fa";


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiEclipseide />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFilezilla/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaSourcetree />
      </Col>
    </Row>
  );
}

export default Toolstack;
