import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MdOutlineExplore } from "react-icons/md";
import GameCards from "../Games/GameCards"

function Game2() {
  return (
    <Container>
      <Row>
        <Col md={8} className="home-about-description">
          <h1 style={{ fontSize: "2.6em" }}>
            PRRÊT A <span className="purple">JOUER ?</span>
          </h1>
          <p className="home-about-body">
            Dans ce jeu vous devrez résoudre une suite d'énigme. 
            Chaque énigme peut etre resolue independament des une des autre. 
            Les 4 premiere enigme vous permetterons de résoudre la derniere.
            c'est donc le résultat de la derniere enigme qui vous permettera 
            d'acceder à l'element caché de se site. Vous disposer de 5 essay 
            si toute fois au bout des 5 fois vous ne parvenez toujours pas a trouver 
            le bon resultat une icone s'affichera pour vous aider dans la boite de dialogue.
            <br />
            <br />
            Bonne chance !
            <span className="wave" role="img" aria-labelledby="wave">
              🍀
            </span>
            <br />
            <br />
            Si vous êtes arrivé jusqu'ici c'est que vous êtes prêt à vous
            lancer dans le grand bain et a découvrir ce que cache réellement se
            site. Trêve de bavarder et commençons &nbsp; <br/><br/>
            <ul>
              <li className="about-activity">
                <MdOutlineExplore /> Je suis l'ensemble de tout ce qui existe, qui suis-je ?
              </li>
              <li className="about-activity">
                <MdOutlineExplore /> Je suis moi meme une interogation. Je suis lié a l'existence, l'origine, la nature ou encore la finalite qui suis-je ? 
              </li>
              <li className="about-activity">
                <MdOutlineExplore /> Je suis une oeuvre de science fiction humoristique qui se passe dans l'espace et j'ai ete ecrit par un britanique, qui suis-je ?
              </li>
              <li className="about-activity">
                <MdOutlineExplore /> Je suis connnus pour atteindre les meilleur performance possible, notament sur les vitesse de calcul, qui suis-je ? 
              </li>
              <li className="about-activity">
              <span className="purple">   <MdOutlineExplore /> Je suis un nombre , je suis la reponse a toute les question du dessus, qui suis-je ? </span>
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
      <Col md={5} className="project-card">
        <GameCards
          title="Résulat"
        />
      </Col>
    </Container>
  );
}
export default Game2;
