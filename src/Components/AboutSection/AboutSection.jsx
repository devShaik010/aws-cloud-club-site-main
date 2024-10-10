//------------------------------------------------------------------------------

/**
 * AboutSection.jsx
 * Description: Component for rendering about section in About Route.
 * Author: Jeswin Joseph J
 * Created: March 2024
 * License: MIT
 */

//------------------------------------------------------------------------------


import React, { useEffect, useState } from 'react';
import "./AboutSection.css";

import SectionHeader from '../SectionHeader/SectionHeader';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import team from '../../assets/img/team/team.jpg'; 

function About() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) * 100;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container id='About' fluid className='about-section'>
      <SectionHeader header = "About Us"  scrollPosition={scrollPosition}/>
      <Row className="section-row">
        <Col lg={6} className="section-content">
            <h2 className='side-head'>Who we are?</h2>
            <p className='para'>
  The <b>AWS Cloud Club MJCET</b> is a dynamic Student Community dedicated to fostering innovation and expertise in cloud computing technologies, particularly focusing on Amazon Web Services (AWS). Established by a group of passionate students, driven by AWS and supported by faculty mentors, the club serves as a platform for students to explore, learn, and collaborate on cloud-related projects and initiatives.
</p>

            <h2 className='side-head'>What we do?</h2>
            <p className='para'>
  The mission of the AWS Cloud Club is to empower students with practical skills in cloud computing through <b>workshops, training sessions, and real-world projects</b>. By leveraging AWS resources, the club prepares members for the evolving tech industry and equips them for career success.
</p>

        </Col>
        <Col lg={6} className="section-content">
          <img src={ team } alt="About Us" className='about-img' />
        </Col>
      </Row>
    </Container>
  );
}

export default About;
