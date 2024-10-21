import React from 'react';
import "./Benefits.css";
// import line from '../../assets/img/line.jpeg'; // Ensure this path is correct
// import line from '../../assets/img/line.png'; // Ensure this path is correct
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import BlurCard from './BlurCard/BlurCard';

import Certification from "../../assets/img/benefits/certification.png";
import Projects from "../../assets/img/benefits/cloudProjects.svg";
import Collaboration from "../../assets/img/benefits/globalCollaboration.svg";
import Guidance from "../../assets/img/benefits/IndustryGuidance.svg";

function Benefits() {
  return (
    <Container id='Activities' fluid className='benefits-section'>
      {/* <img className='imgline' src={line}   alt="Decorative line" /> Use the imported line image */}
      <h1 > Prospects </h1>

      <Row className="benefits-row">
        <Col lg={3} className="benefits">
          <BlurCard title="AWS Certifications" image={Certification} />
        </Col>

        <Col lg={3} className="benefits right-item">
          <BlurCard title="Amazing Cloud Projects" image={Projects} />
        </Col>

        <Col md={3} className="benefits right-item">
          <BlurCard title="Global Collaboration" image={Collaboration} />
        </Col>

        <Col md={3} className="benefits right-item">
          <BlurCard title="Industry Guidance" image={Guidance} />
        </Col>
      </Row>

      <h2 className='gradient-text' style={{ textAlign: "center", marginTop: "40px",color:"white" }}>And many more...</h2>
    </Container>
  );
}

export default Benefits;