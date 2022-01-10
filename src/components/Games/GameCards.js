import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { GrValidate } from "react-icons/gr";
import { Link } from "react-router-dom";
import { Redirect } from 'react-router';


class GamesCards extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      response: "",
      errors: [],
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
    });

    //Test de mon input res correct ou non
    if (this.state.response === "correct") {
      alert("response correcte");
    } else if (errors.length > 0) {
      return false;
    } else {
      //redirection
      this.push("/about")   
      alert("reponse incorecte veuillez retenter votre chance !");
    }
  }

  render() {
    return (
      <Card className="project-card-view">
        <Card.Header>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text style={{ textAlign: "justify" }}>
            {this.props.description}
          </Card.Text>
        </Card.Header>
        <Card.Body className="card-game">
          <input
            autoComplete="off"
            className={
              this.hasError("response")
                ? "form-control is-invalid"
                : "form-control"
            }
            name="response"
            value={this.state.response}
            onChange={this.handleInputChange}
            placeholder="Entrer votre reponse"
          />
          <Button variant="primary" onClick={this.handleSubmit} target="_blank">
            <GrValidate />
            Valider
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default GamesCards;
