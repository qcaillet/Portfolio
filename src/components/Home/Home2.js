import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LAISSE <span className="purple"> MOI ME </span> PRÉSENTER
            </h1>
            <p className="home-about-body">
              Depuis adolescent je suis passionné de programmation et tout ce
              qui touche de près ou de loin à l'informatique.
              <br />
              <br />
              Je maitrise les langages
              <i>
                <b className="purple"> Javascript et Java. </b>
              </i>
              ainsi que de nombreuses méthodes de chefferie de projet.
              <br />
              <br />
              J'ai un attrait envers les nouvelles technologies et j'aime tout
              particulièrement apprendre de nouvelles choses. Bien que &nbsp;
              <i>
                <b className="purple">la programmation </b> soit mon domaine de
                prédilection, j'ai depuis ses dernières années un attrait
                particulier sur tout ce qui touche à la{" "}
                <b className="purple"> chefferie de projet et au managment</b>.
              </i>
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>TROUVEZ-MOI</h1>
            <p>
              <span className="purple">connectez-vous </span> avec moi
            </p>
            <ul className="home-about-social-links">
              {/* <li className="social-icons">
                <a
                  href="https://github.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://twitter.com/CailletQuentin"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/qcaillet/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/cailletquentin/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
