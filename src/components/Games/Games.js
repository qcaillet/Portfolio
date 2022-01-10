import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import homeLogo from "../../Assets/game1.png";
import TypeComming from "./TypeComing";
import GameCards from "./GameCards";
import Game2 from "./Game2";

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
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img src={homeLogo} alt="home pic" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </Container>
      <Game2 />
      <Col md={4} className="project-card">
      <GameCards title="Résulat" description="veuillez rentrer votre résultat ci-dessous" />
      </Col>
    </section>
  );
}

export default Games;
