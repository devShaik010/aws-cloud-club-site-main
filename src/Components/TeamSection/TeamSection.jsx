import React, { useEffect, useState } from 'react' ;
import { Col, Container, Row } from 'react-bootstrap';
import SectionHeader from '../SectionHeader/SectionHeader';


import "./TeamSection.css"

// import Jeswin from "../../assets/img/team/jeswin1.jpg"
// import Porselvan from "../../assets/img/team/porselvan.jpg"
// import Sakkthivel from "../../assets/img/team/sakkthi.jpg"
// import omer_shah from "../../assets/img/team/sakkthi.jpg"
// import Rishab from "../../assets/img/team/rishab2.jpg"
import img from "../../assets/img/profile.jpg";
import teamimg from "../../assets/img/team/team.jpg";
import TeamCard from '../TeamCard/TeamCard';

function TeamSection() {
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
    <Container className='team-section'>

      <SectionHeader header="Our Team"  scrollPosition={scrollPosition} />
      {/* <div className="team-image-container">
      <img src={teamimg} alt="Our Team" className="team-image" />
    </div> */}
      <Row className='members-row-one'>
        <Col lg="3" className='left-member'>
            <TeamCard 
            quote="Take the first step today <br /> In the stairs to Reach the Cloud" 
            image={img} title="Syed Omer Shah" 
            designation="AWS Cloud Club Captain"
            connect="https://www.linkedin.com/in/syed-omer-shah/" />
        </Col>
        <Col lg="3" className='right-member' >
            <TeamCard 
            quote="The infrastructure of the future is being built by technology, with the architect, AWS cloud." 
            image={img} title="Danish Mohiuddin"  
            designation="Vice captain"
            connect="https://www.linkedin.com/in/mhmmeddanish/"/>
        </Col>
        <Col lg="3" className='right-member' >
            <TeamCard quote="Scale Your Dreams with AI, <br /> Fuel Your Ambitions with AWS. <br />" 
            image={img} title="Maria Ashfaq" 
            designation="Secretary"
            connect="https://www.linkedin.com/in/maria-ashfaq-2aa240229/"/>
        </Col>
      </Row>
        
      <Row className='members-row-two'>
        <Col lg="3" className='left-member' >
            <TeamCard quote="Just keep on increasing your FullStack. At one point, you will Reach the Cloud" 
            image={img} 
            title="Shaik Ehsan" 
            designation="Chief Coordinator"
            connect="https://www.linkedin.com/in/shaik-ehsan-166b67273/"/>
        </Col>
        <Col lg="3"  className='right-member'>
            <TeamCard quote="Cloud connects servers, while a Community connects people. <br />" 
            image={img} title="Unaisah Noor" 
            designation="Chief Representative"
            connect="https://www.linkedin.com/in/unaisah-noor/"/>
        </Col>
        <Col lg="3"  className='right-member'>
            <TeamCard quote="Cloud connects servers, while a Community connects people. <br />" 
            image={img} title="Zayab Ahmed" 
            designation="Outreach Director"
            connect="https://www.linkedin.com/in/zayab-ahmed-a56529241/"/>
        </Col>
      </Row>
      
      <Row className='members-row-three'>
        <Col lg="3"  className='left-member'>
            <TeamCard quote="Cloud connects servers, while a Community connects people. <br />" 
            image={img} title="Nameera Mohammed" 
            designation="Technical Coordinator"
            connect="https://www.linkedin.com/in/nameera-m-319bb8273/"/>
        </Col>
        <Col lg="3"  className='right-member'>
            <TeamCard quote="Cloud connects servers, while a Community connects people. <br />" 
            image={img} title="Syeda Zoya" 
            designation="Treasurer"
            connect="https://www.linkedin.com/in/syedazoya018/"/>
        </Col>
      </Row>

    </Container>
  );
}


export default TeamSection ;
