import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Namaste.I am <span className="purple">Rishabh Menasinakayi. </span>
            and I hail from <span className="purple"> Redmond, Washington.</span>
            <br />
            I go to Tesla STEM High School, after completing 8th grade at Rose Hill Middle School.
            <br />
            I completed elementary and most of middle school in India and moved to America in 2021.
            <br />
            <br />
            Apart from coding, some other activities that I love to do include:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
              <li className="about-activity">
              <ImPointRight /> Intellectual Activities
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            {" "}
          </p>
          <footer className="blockquote-footer"></footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
