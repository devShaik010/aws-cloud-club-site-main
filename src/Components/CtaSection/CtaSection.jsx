import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import { Link } from "react-router-dom";

import "./CtaSection.css";
import SectionHeader from "../SectionHeader/SectionHeader";

function CtaSection() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position =
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        100;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container className="cta-section">
      <Row className="cta">
        <Col sm={12} className="cta-col">
          <h1><b>Join US!</b></h1>
          <p className="para">
            The AWS Cloud Club at MJCET, Hyderabad, is a vibrant community of
            passionate learners in cloud technology. Join us to exchange ideas,
            collaborate on innovations, and expand your knowledge with
            like-minded peers. Dive into the world of cloud computing as we
            explore cutting-edge developments and build meaningful connections.
            Together, we drive technological advancement and unlock new
            possibilities in the cloud domain.
          </p>

          <div className="btn-div">
            <Link to="/join" className="join-btn">
              Join Community &nbsp;
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                />
              </svg>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default CtaSection;
