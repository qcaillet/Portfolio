import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Bonjour à tous, je suis <span className="purple">Caillet Quentin. </span>
            <br />Je suis un developpeur qui depuis mes derniere année d'étude 
            je m'oriente vers de la cheferie de projet et du managment. 
            La cheferie de projet et le managment m'anime depuis bientot 3 ans en effet etant etudiant en alternance 
            cela me permet d'allier le coté technique qui est la programation ainsi que le coté gestion de projet dans 
            un cas concret et reele dans le domaine de l'entreprise ainsi que le coté theorique des cours qui sont oriente 
            exclusivement autour de la cheferie de projet et du managerial.
            <br />
            <br />
            Avec une passion grandisante pour la technologie de la blockchain et tout ce qui 
            touche au CryptoMonnaie. Vous retrouver plus bas mes principaux skill technique si vous shouatais 
            en savoir plus au niveau de mes skill en terme de management et chefferie de projet je vous propose
            dans discuter lors d'un entretien vous retrouverer toute les information necessaire pour me contacter sur 
            ce site.
            <br />
            <br />
            A part le codage, quelques autres activités que j'adore faire !
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jouer de la guitar 
            </li>
            <li className="about-activity">
              <ImPointRight /> Voyager 
            </li>
            <li className="about-activity">
              <ImPointRight /> Cuisiner
            </li>
            <li className="about-activity">
              <ImPointRight /> Moto
            </li>
            <li className="about-activity">
              <ImPointRight /> Blockcahin/Cryptoactif
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Efforcez-vous de construire des choses qui font la différence"{" "}
          </p>
          <footer className="blockquote-footer">Quentin</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
