import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
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
              LAISSE <span className="purple"> MOI ME </span> PRESENTE
            </h1>
            <p className="home-about-body">
              Depuis adolescent je suis passioné de programation et tout ce qui touche
              de pres ou de loin a l'informatique.
              <br />
              <br />Je maitrisse les langage
              <i>
                <b className="purple"> Javascript and Java. </b>
              </i>
              ainsi que de nombreuese méthode de cheferie de projet.
              <br />
              <br />
              J'ai un attrait envers les nouvelles tecchnologie et j'aime tout particulierement
              apprendre de nouvelle choses bien que  &nbsp;
              <i>
                <b className="purple">la programmation </b> sois mon domaine 
                de prelidection j'ai un attrait tout particulier sur ce qui touche a la {" "}
                <b className="purple">
                chefferie de projet et au managment.
                </b>
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
