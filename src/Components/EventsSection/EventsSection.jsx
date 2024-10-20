import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./EventsSection.css";
import SectionHeader from "../SectionHeader/SectionHeader";
import EventsCard from "./EventsCard/EventsCard";
import DetailsCard from "./DetailsCard/DetailsCard";
import meetup4 from "../../assets/img/posters/meetup4.jpeg";
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
        <Col lg={5}>
          <EventsCard image={meetup4} title="Meetup-4 (Aug 2024)"></EventsCard>
        </Col>
        <Col lg={7} className="event-desc">
          <h1 className="event-title">Meetup-4 (Aug 2024)</h1>
          <p className="para">
            Join us for the Fourth MeetUp of AWS Cloud Club MJCET on August 31,
            2024, from 5:30 PM to 7:30 PM IST, conducted online. Our session
            will be led by Amit Arora, who will provide a comprehensive
            introduction to AWS Cloud, explore the exciting realm of Generative
            AI within the AWS ecosystem, and delve into essential security
            practices on the cloud. This is a great opportunity to enhance your
            knowledge and connect with like-minded individuals passionate about
            cloud technologies.
          </p>

          <DetailsCard
            speaker="Mr. Amit Arora"
            mode="Virtual"
            date="31st Aug, 2024"
            time="5:30 PM [IST]"
            participants="--"
            sponsor="--"
            eventLink="https://www.meetup.com/aws-cloud-club-panimalar-chennai/events/303073534/"
          ></DetailsCard>
        </Col>
      </Row>
    </Container>
  );
}

export default EventsSection;
