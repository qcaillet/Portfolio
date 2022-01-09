import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiFilezilla,
  SiPostman,
  SiEclipseide
} from "react-icons/si";
import {
  FaSourcetree
} from "react-icons/fa";
import TooltipSkills from "./Tooltip";


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <TooltipSkills text="Visual Studio Code" icon={<SiVisualstudiocode />}></TooltipSkills>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <TooltipSkills text="Eclipse" icon={<SiEclipseide />}></TooltipSkills>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <TooltipSkills text="Postman" icon={<SiPostman />}></TooltipSkills>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <TooltipSkills text="Filezilla" icon={<SiFilezilla />}></TooltipSkills>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <TooltipSkills text="SourceTree" icon={<FaSourcetree />}></TooltipSkills>
      </Col>
    </Row>
  );
}

export default Toolstack;
