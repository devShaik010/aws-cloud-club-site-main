import React, { useState } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import './GallerySection.css';

// photos and memories
import hero from '../../assets/img/events/team.jpg'
import r from '../../assets/img/events/r.jpeg'
import r1 from '../../assets/img/events/r1.jpeg'
import r2 from '../../assets/img/events/r3.jpeg'
import r3 from '../../assets/img/events/r4.jpeg'
import r4 from '../../assets/img/events/r5.jpeg'
import r5 from '../../assets/img/events/r6.jpeg'
import r6 from '../../assets/img/events/r7.jpeg'

function GallerySection() {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const images = [
    r4,r5,r6,hero,r,r1,r2,r3,
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <Container className='gallery-section'>
      <h2 className='gallery-tag'>Moments📸</h2>
      <Row className='row-gallery'>
        {images.map((image, index) => (
          <Col xs={12} sm={6} md={4} key={index} className='image-container'>
            <img
              src={image}
              alt={`Gallery Image ${index + 1}`}
              onClick={() => handleImageClick(image)}
            />
          </Col>
        ))}
      </Row>

      <Modal
        show={showModal}
        onHide={handleClose}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        centered
        fullscreen
      >
        <Modal.Body className="modal-body">
          <button className="close-button" onClick={handleClose}>✖</button>
          <img src={selectedImage} alt="Selected" className="fullscreen-image" />
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default GallerySection;
