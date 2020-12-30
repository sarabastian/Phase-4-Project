import React from 'react';
import { Modal, Button, Carousel } from 'react-bootstrap';

class VanShow extends React.Component {



  render() {
    return (
      <>
        <div
          className="van-show"

        >

        </div>
        <Modal dialogClassName="my-modal" show={this.props.show} onHide={this.props.closeModal}
          size="lg"
          
        aria-labelledby="example-custom-modal-styling-title">
          <Modal.Header closeButton>
            <Modal.Title>{this.props.van.name}</Modal.Title>
          </Modal.Header>
          <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={this.props.van.images[0].img_url}
                  alt = 'First Slide'
                />
                <Carousel.Caption>
                  <h3>{this.props.van.description}</h3>
                 
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={this.props.van.images[1].img_url}
                  alt='Second Slide'
                />

                <Carousel.Caption>
                  <h3>{this.props.van.pet_friendly ? 'Pet Friendly' : 'Not Pet Friendly'}</h3>
                  
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block 1-100"
                  src={this.props.van.images[2].img_url}
                  alt = 'Third Slide'
                />

                <Carousel.Caption>
                  <h3>{this.props.van.rates}/day</h3>
                  
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>

          <Modal.Body>Includes: {this.props.van.interior_features}
            


          </Modal.Body>
          <Modal.Footer>
            <Button variant="info">Book Now</Button>
            <Button variant="info" onClick={this.props.closeModal}>Close</Button>
            
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}



export default VanShow;

