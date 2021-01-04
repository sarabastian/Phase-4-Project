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
                  <h3>Pick-up and Return: {this.props.van.location}</h3>
                  
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block 1-100"
                  src={this.props.van.images[2].img_url}
                  alt = 'Third Slide'
                />

                <Carousel.Caption>
                  <h3>{this.props.van.size}</h3>
                  
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>

          <Modal.Body>Includes: {this.props.van.interior_features}
          <br></br>
          <br></br>
          Utilities: {this.props.van.utilities}
          <br></br>
          <br></br>
          {this.props.van.pet_friendly ? <img src="data:image/png;base64,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" />: <img src='https://info.petscreening.com/hs-fs/hubfs/nopeticon23-2.png?width=649&name=nopeticon23-2.png' />}
            


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

