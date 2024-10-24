import React from "react";
import "./Comingevent.css";
import img from "../../../assets/img/image.png";

const EventCard = () => {
  return (
    <div className="card1-container">
      <div className="card1-img">
        <img src={img} alt="Event" width={500} height={500} />
      </div>
      <div className="card1-content">
        <div className="card1-title">DATANYX</div>
        <div className="card-info">
          <p>
            A unique opportunity to showcase your talent in knowledge-sharing
            skills work for noble social cause in the field of education network
            with like-minded people across the nation. (placeholder text)
          </p>
          <p>To Register for the Datathon, Click Below</p>
        </div>
        <div className="card-register">
        <button className="register-button" onClick={() => window.open('https://datanyx.in/', '_blank')}>
    Register
</button>

        </div>
      </div>
    </div>
  );
};

export default EventCard;
