import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import 'react-pdf/dist/esm/Page/TextLayer.css';

import homeLogo from "../../Assets/game1.png";
import TypeComming from "./TypeComing";
import Game2 from "./Game2";
import { HiChevronDoubleDown } from "react-icons/hi";


function Games() {
  return (
    <section>
      <Container fluid className="game-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <div style={{ padding: 50, textAlign: "left" }}>
                <TypeComming />              
              </div>
              <p className="textSlide">Glisse vers le bas</p>
              <div className="arrow bounce">
               <HiChevronDoubleDown className="fa fa-arrow-down fa-2x" />
                </div>
            </Col>
            <Col md={5} style={{ paddingBottom: 20 }}>
              <img src={homeLogo} alt="home pic" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </Container>
      <Game2 />
    </section>
  );
}

export default Games;
