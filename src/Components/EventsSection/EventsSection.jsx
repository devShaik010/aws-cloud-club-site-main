import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./EventsSection.css";
import SectionHeader from "../SectionHeader/SectionHeader";
import EventsCard from "./EventsCard/EventsCard";
import DetailsCard from "./DetailsCard/DetailsCard";
import imagify from "../../assets/img/posters/imagify.jpg";
import inauguration from "../../assets/img/posters/inauguration.jpg"
import orientation from "../../assets/img/posters/orientationday.jpeg"

import Comingevent from "./Comingevent/Comingevent"
function EventsSection() {
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
    <Container className="events-section">
      <center>
        {" "}
        <h1>Upcoming Events</h1>
      </center>

      <center>
       <Comingevent/>
      </center>

      <SectionHeader header="Past Events" />
      <Row>
        <Col lg={5} className="pt-3">
          <EventsCard image={imagify} title="Imagify 2.0"></EventsCard>
        </Col>
        <Col lg={7} className="event-desc">
          <h1 className="event-title">Imagify 2.0</h1>
          <p className="para">
          IMAGIFY 2.0, organized by IEEE SMC MJCET in collaboration with
AWS CC MJCET, took place on 26th July 2024 at MJCET. The event
aimed to explore the latest trends in artificial intelligence and machine
learning, offering participants both theoretical insights and practical
experience. With sessions on Generative AI, Prompt Engineering,
Vision-Language Models, and AWS services, the event successfully
bridged the gap between AI concepts and real-world applications.

          </p>

          <DetailsCard
            speaker=""
            mode="Offline"
            date="26 July, 2024"
            time="10 AM "
            participants="--"
            sponsor="--"
            eventLink="https://www.meetup.com/aws-cloud-club-at-mjcet/"
          ></DetailsCard>
        </Col>

        <Col lg={5} className="pt-3">
          <EventsCard image={orientation} title="Orientation"></EventsCard>
        </Col>
        <Col lg={7} className="event-desc">
          <h1 className="event-title">Orientation Day</h1>
          <p className="para">
          On August 17, 2024, the AWS Club held a pivotal meeting at SU HUB
from 11:00 am to 3:30 pm. The gathering aimed to foster collaboration
and ensure alignment with the club’s objectives. The event featured the
introduction of the governing body, Execom, and core members,
followed by a discussion of the club’s rules emphasizing respect,
humility, and confidentiality.
Key highlights included the announcement of an industrial visit to
Amazon’s office and a Bootcamp offering AWS certifications. The
meeting concluded with a lively ice-breaking session, “Heads Up,”
which helped strengthen bonds among members, with the winners
receiving surprise rewards.

          </p>

          <DetailsCard
            speaker="Syed Omer Shah"
            mode="Offline"
            date="17 August, 2024"
            time="11 AM "
            participants="--"
            sponsor="--"
            eventLink="https://www.meetup.com/aws-cloud-club-at-mjcet/"
          ></DetailsCard>
        </Col>

        <Col lg={5} className="pt-3">
          <EventsCard image={inauguration} title="inauguration"></EventsCard>
        </Col>
        <Col lg={7} className="event-desc">
          <h1 className="event-title">Inauguration Ceremony</h1>
          <p className="para">
          On 28th June 2024, we hosted an engaging event from 10:00AM to 12:00PM at
the Block 4 Seminar Hall. Attendees had the opportunity to connect, learn, and
collaborate on various topics related to cloud computing and Amazon Web
Services (AWS). The inauguration of our club featured the esteemed presence of Mr. Faizal
Khan, Community Lead of the AWS User Group and AWS Community Hero, as
the distinguished Chief Guest.

          </p>

          <DetailsCard
            speaker="Mr. Faizal Khan"
            mode="Offline"
            date="28, 2024"
            time="10 AM "
            participants="--"
            sponsor="--"
            eventLink="https://www.meetup.com/aws-cloud-club-at-mjcet/"
          ></DetailsCard>
        </Col>
      </Row>
    </Container>
  );
}

export default EventsSection;
