import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MdOutlineExplore } from "react-icons/md";
import GameCards from "../Games/GameCards";

function Game2() {
  return (
    <Container>
      <Row>
        <Col md={8} className="home-about-description">
          <h1 style={{ fontSize: "2.6em" }}>
            PRRÊT A <span className="purple">JOUER ?</span>
          </h1>
          <p className="home-about-body">
            Dans ce jeu vous devrez résoudre une suite d'énigmes. Chaque énigme
            peut être résolut indépendamment dès une des autres. Les quatre premières
            énigmes vous permettront de résoudre la dernière. C'est donc le
            résultat de la dernière énigme qui vous permettra d'accéder à
            l'élément caché de ce site. 
            Vous disposer de trois essais si toutefois
            au bout des trois fois vous ne parvenez toujours pas à trouver le bon
            résultat une icône s'affichera pour vous aider dans la boite de
            dialogue.
            <br />
            <br />
            Bonne chance !
            <span className="wave" role="img" aria-labelledby="wave">
              🍀
            </span>
            <br />
            <br />
            Si vous êtes arrivé jusqu'ici, c'est que vous êtes prêt à vous lancer
            dans le grand bain et à découvrir ce que cache réellement ce site.
            Trêve de bavarder et commençons &nbsp; <br />
            <br />
            </p>
            <ul>
              <li className="about-activity">
                <MdOutlineExplore /> Je suis l'ensemble de tout ce qui existe,
                qui suis-je ?
              </li>
              <li className="about-activity">
                <MdOutlineExplore /> Je suis moi-même une interrogation. Je suis
                lié à l'existence, l'origine, la nature ou encore la finalité,
                qui suis-je ?
              </li>
              <li className="about-activity">
                <MdOutlineExplore /> Je suis une oeuvre de science-fiction
                humoristique qui se passe dans l'espace, et j'ai été écrite par un
                Britannique, qui suis-je ?
              </li>
              <li className="about-activity">
                <MdOutlineExplore /> Je suis connu pour atteindre les meilleurs
                performances possibles, notamment sur les vitesses de calcul, qui
                suis-je ?
              </li>
              <li className="about-activity">
                <span className="purple">
                  <MdOutlineExplore /> Je suis un nombre, je suis la réponse à
                  toutes les questions précédente, qui suis-je ?{" "}
                </span>
              </li>
            </ul>
        </Col>
        {/* <Col md={4} className="myAvtar">
          <Tilt>
            <img src={myImg} className="img-fluid" alt="avatar" />
          </Tilt>
        </Col> */}
      </Row>
      <Col md={5} className="project-card">
        <GameCards title="Résulat" />
      </Col>
    </Container>
  );
}
export default Game2;
