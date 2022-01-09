import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Form, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

function GamesCards(props) {
  return (

      <Card className="project-card-view">
        <Card.Header>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        </Card.Header>
        <Card.Body className="card-game">
         <Form.Control type="text" placeholder="Entrer votre reponse" />
          <Button variant="primary" href={props.link} target="_blank">
            Valider
          </Button>
        </Card.Body>
      </Card>
    
  );
}

export default GamesCards;
