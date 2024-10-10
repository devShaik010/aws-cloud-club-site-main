import React from "react";

import { Container, Col, Row } from "react-bootstrap";
import Logo from "../../assets/img/logo.png";

import { Parallax } from "react-scroll-parallax";

import "./IntroSection.css";

function IntroSection() {
  return (
    <Container id="intro" className="intro-section">
      <Row>
        <Col lg={6}>
          <h1>
            {" "}
            <b> AWS Cloud Club</b>
          </h1>
          <p class="para">
            The <b>AWS Cloud Club at MJCET</b> empowers students with AWS Cloud
            knowledge across various use cases like security, AI, and business
            analytics. We emphasize the advantages of cloud technology for
            business growth. <br />
            <br />
            Members gain hands-on experience through projects, developing
            essential <b>technical</b> and <b>business expertise</b> that are in
            high demand. 🚀💼
          </p>
        </Col>
        {/* <Col lg={6} style={{ display: "flex", alignItems: "Center", justifyContent: "center" }}>
            <img src={Logo} className='logo-image' alt=""/>
            </Col> */}

        <Col
          lg={6}
          style={{
            display: "flex",
            alignItems: "Center",
            justifyContent: "center",
          }}
        >
          {/* <Parallax translateX={['100px', '0px']}> */}
          <Parallax scale={[1.0, 1]}>
            <img src={Logo} className="logo-image" alt="" />
          </Parallax>
        </Col>
      </Row>
    </Container>
  );
}

export default IntroSection;
