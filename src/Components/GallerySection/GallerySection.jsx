import React, { useState } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import './GallerySection.css';

import inauguration1 from '../../assets/img/events/inauguration1.jpg';
import inauguration2 from '../../assets/img/events/inauguration2.jpg';
import inauguration3 from '../../assets/img/events/inauguration4.jpg';

function GallerySection() {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const images = [
    inauguration1,
    inauguration2,
    inauguration3,
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
