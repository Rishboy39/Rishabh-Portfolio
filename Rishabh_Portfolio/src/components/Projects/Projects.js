import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Menu Master"
              description="A Hackathon AI Project which takes 
              a trained model with an Octo API key and is a chatbot that can answer any 
              question you have about a certain menu from a restaurant."
              ghLink="https://github.com/Rishboy39/Menu-Master"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Gauss-Elimination"
              description="Using HTML, CSS, and Python, made a Gauss-Jordan Solver which is just a complicated math function to find the values of variables with numerous equations and variables."
              ghLink="https://github.com/Rishboy39/gauss-Elimination"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Python Files Organizer"
              description="Simple Python Program that takes in the files in a particular folder stored locally and organizes them based on file extensions."
              ghLink="https://github.com/Rishboy39/Files-Cleaner"          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Space Hack AI"
              description="Condensation Risk analyzer made during a hackathon by me and my team. It was made for NASA and Boeing Rockets to detect 
              condensation on spacecraft with a pre-made trained Linear Regression Model which helps avoid accidents like the electricals freezing over."
              ghLink="https://github.com/Rishboy39/EMP-Hackfest-2024"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Car Website"
              description="First time working with HTML and CSS. Looks very choppy but it was my jump start into Web Dev and allowed me to start learning front-end things like Node, React, and JS."
              ghLink="https://github.com/Rishboy39/Car-Website"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Basic Chatbot"
              description="One of the first programs I made which basically just takes in questions and stores them in a JSON file which it uses to learn on its own. 
              Just a very early stage intro into Machine Learning and chatbots."
              ghLink="https://github.com/Rishboy39/Chatbot"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
