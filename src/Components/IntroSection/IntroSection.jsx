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
            Join the <b>AWS Cloud Club at MJCET</b> to explore the power of AWS
            Cloud! From security to AI and business analytics, we highlight how
            cloud technology drives growth. Members gain hands-on experience
            through projects, building valuable <b>technical</b> and{" "}
            <b>business skills</b> in high demand. 🚀💼
          </p>
          <p class="para">
            Connect with industry experts and peers through workshops and
            seminars. Explore cloud computing trends and enhance your skills
            with the
            <b>AWS Cloud Club</b>. Join us to elevate your knowledge and
            network! 🌟
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
