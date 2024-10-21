import React, { useEffect, useState } from "react";
import "./HeroStyles.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Hero() {
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollOffset(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const cloudOpacity = scrollOffset * 0.002; // Adjust the multiplier to control the speed of opacity change

  return (
    <Container fluid className="hero">
      <Row className="hero-row">
        <Col lg={12} className="hero-content">
          <div className="badge-container">
            <p className="badg">
              <span className="new">New</span> Telangana's first cloud club
            </p>
          </div>
          <h1 className="hero-h1">Welcome to MJCET's</h1>
          <h2 className="hero-h2">
            <span className="aws-border">AWS </span> Cloud Club
          </h2>
          <h4>Be a part of the cloud revolution now</h4>
        </Col>
      </Row>
    </Container>
  );
}

export default Hero;
