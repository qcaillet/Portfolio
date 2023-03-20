import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Bonjour à tous, je m'appelle{" "}
            <span className="purple">Caillet Quentin</span>.
            <br />
            Je suis un développeur qui depuis mes dernieres années d'études
            s'oriente vers de la{" "}
            <span className="purple">chefferie de projet et du management</span>.
            La chefferie de projet et le management m'animent depuis bientôt{" "}
            <span className="purple"> 3 ans</span>.
            En effet durant ses 4 dernières années de par mes études que je
            réalise en<span className="purple"> alternance, </span>j'ai pu allier
            chefferie de projet et programmation. L'alternance ma permit de mêttre{" "}
            toutes les{" "}
            <span className="purple">
              {" "}
              notions théoriques en application dans le monde de l'entreprise
            </span>
            .
            <br />
            <br />
            Vous retrouverez plus bas mes{" "}
            <span className="purple"> principaux skills techniques</span>.<br/>
             Si vous souhaitez en savoir plus au niveau de mes skills en matière de
            <span className="purple"> management et chefferie de projet</span>,
            je vous propose d'en discuter lors d'un entretien. 
            <br/>
            vous retrouverez
            toutes les informations nécessaires pour me contacter sur ce site.
            <br />
            <br />À part le codage, quelques autres activités que j'adore faire
            !
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jouer de la guitare
            </li>
            <li className="about-activity">
              <ImPointRight /> Voyager
            </li>
            <li className="about-activity">
              <ImPointRight /> Cuisiner
            </li>
            <li className="about-activity">
              <ImPointRight /> Blockcahin/Cryptoactif
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
