import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Caillet Quentin </span>
            from <span className="purple"> Bhubaneswar, India.</span>
            <br />I am a junior pursuing IMSC in Maths and Computing in BIT
            Mesra.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
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
