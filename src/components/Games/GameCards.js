import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { GiConfirmed } from "react-icons/gi";
import { BiHelpCircle } from "react-icons/bi";
import TooltipSkills from "../About/Tooltip";

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

    //response
    if (this.state.response === "") {
      errors.push("response");
    }

    this.setState({
      errors: errors,
      response: "",
    });
//
    if (this.state.response === "42") {
      window.open("http://localhost:3000/gameAsteroids");
    } else if (errors.length > 0) {
      return false;
    } else {
      this.setState({ count: this.state.count + 1 });
      alert("Réponse incorrecte veuillez retenter votre chance !");
    }
  }

  render() {
    if (this.state.count >= 3 || (this.state.count >=3 && this.hasError("response"))) {
      var res = true;
    }
    return (
      <Card className="project-card-view">
        <Card.Header>
          <div className={res ? "show" : "hidden"}>
            <TooltipSkills
              text="veuillez entrer “the answer to life, the universe and everything“ sur google et vous obtiendrez la réponse 😉"
              icon={<BiHelpCircle className=" help bounceHelp" />}
            ></TooltipSkills>
          </div>
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
          <Button
            variant="primary"
            onClick={this.handleSubmit}
            className="button-resultat"
            target="_blank"
          >
            <GiConfirmed />
            &nbsp;Valider
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default GamesCards;
