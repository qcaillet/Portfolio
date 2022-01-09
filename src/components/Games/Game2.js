import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import Button from "react-bootstrap/Button";
import gameCards from "./GameCards";

import { MdOutlineExplore } from "react-icons/md";

function Game2() {
  return (
    <Container>
      <Row>
        <Col md={8} className="home-about-description">
          <h1 style={{ fontSize: "2.6em" }}>
            PRRÊT A <span className="purple">JOUER ?</span>
          </h1>
          <p className="home-about-body">
            Dans ce jeux vous devrez résoudre une suite d'égnime ecrite
            ci-dessous. Chaque egnime est independente des une des autres. Une
            fois toute les egnime resolus vous obtiendrer un code qui vous
            permeteera d'acceder a l'element cacher de se site.
            <br />
            <br />
            Bonne chance !
            <span className="wave" role="img" aria-labelledby="wave">
              🍀
            </span>
            <br />
            <br />
            Si vous etes arriver jusqu'ici c'est que vous etes pret a vous
            lancer dans le grand bain et a découvrire se que cache réllement se
            site. Treve de bavarder et commencons &nbsp;
            <ul>
              <li className="about-activity">
                <MdOutlineExplore /> egnime 1
              </li>
              <li className="about-activity">
                <MdOutlineExplore /> egnime 2
              </li>
              <li className="about-activity">
                <MdOutlineExplore /> egnime 3
              </li>
              <li className="about-activity">
                <MdOutlineExplore /> egnime 4
              </li>
              <li className="about-activity">
                <MdOutlineExplore /> egnime 5
              </li>
            </ul>
          </p>
        </Col>
        {/* <Col md={4} className="myAvtar">
          <Tilt>
            <img src={myImg} className="img-fluid" alt="avatar" />
          </Tilt>
        </Col> */}
      </Row>
    </Container>
  );
}
export default Game2;
