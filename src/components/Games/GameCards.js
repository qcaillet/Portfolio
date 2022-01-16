import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { GiConfirmed } from "react-icons/gi";
// import {BiHelpCircle} from "react-icons/bi"
// import TooltipSkills from "../About/Tooltip";

class GamesCards extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      response: "",
      errors: [],
      count: 0,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  hasError(key) {
    return this.state.errors.indexOf(key) !== -1;
  }

  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  //fonction update inputs
  handleInputChange(event) {
    var key = event.target.name;
    var value = event.target.value;
    var obj = {};
    obj[key] = value;
    this.setState(obj);
  }

  handleSubmit(event) {
    event.preventDefault();
    //VALIDATE
    var errors = [];
    var count = 0;

    //response
    if (this.state.response === "") {
      errors.push("response");
    }

    this.setState({
      errors: errors,
      response: "",
      count: this.state.count + 1,
    });

    //Test de mon input res correct ou non
    if (this.state.response === "42") {
      window.open("http://localhost:3000/game-asteroids");
    } else if (errors.length > 0) {
      return false;
    } else {
      count = this.state.count + 1;
      if(count === 5 || count > 5){
        console.log("ok");
      }
      alert("Réponse incorrecte veuillez retenter votre chance !");
    }
  }

  render() {
    return (
      <Card className="project-card-view">
        <Card.Header>
        {/* <TooltipSkills text="veuillez entrer “the answer to life, the universe and everything“ sur google et vous obtiendrez la réponse 😉" ></TooltipSkills> */}
          <Card.Title>{this.props.title}</Card.Title>
        </Card.Header>
        <Card.Body className="card-game">
          <input
            autoComplete="off"
            className={
              this.hasError("response") ? "control  is-invalid" : "control"
            }
            name="response"
            value={this.state.response}
            onChange={this.handleInputChange}
            placeholder="Entrer votre reponse"
          />
          <h1>{this.state.nb}</h1>
          <Button variant="primary" onClick={this.handleSubmit} className="button-resultat" target="_blank">
            <GiConfirmed />
            &nbsp;Valider
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default GamesCards;
