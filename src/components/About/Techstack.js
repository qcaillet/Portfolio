import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMysql,
  DiGit,
  DiJava,
  DiScrum,
  DiLess,
} from "react-icons/di";

import { FaEthereum } from "react-icons/fa";
import { SiDocker } from "react-icons/si";
import Tooltip from "react-bootstrap/Tooltip";
import TooltipSkills from "./Tooltip";

const renderTooltip = (props) => <Tooltip {...props}>Java</Tooltip>;

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <TooltipSkills text="Java" icon={<DiJava />}></TooltipSkills>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TooltipSkills
          text="Javascript"
          icon={<DiJavascript1 />}
        ></TooltipSkills>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TooltipSkills text="NodeJs" icon={<DiNodejs />}></TooltipSkills>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TooltipSkills text="React" icon={<DiReact />}></TooltipSkills>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TooltipSkills text="MySql" icon={<DiMysql />}></TooltipSkills>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TooltipSkills text="Git" icon={<DiGit />}></TooltipSkills>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TooltipSkills text="Less" icon={<DiLess />}></TooltipSkills>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TooltipSkills text="Docker" icon={<SiDocker />}></TooltipSkills>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TooltipSkills
          text="Etherum/Solidity"
          icon={<FaEthereum />}
        ></TooltipSkills>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TooltipSkills
          text="Méthodologie Scrum"
          icon={<DiScrum />}
        ></TooltipSkills>
      </Col>
    </Row>
  );
}

export default Techstack;
