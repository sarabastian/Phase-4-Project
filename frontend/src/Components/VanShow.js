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
        <Modal show={this.props.show} onHide={this.props.closeModal}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.van.name}</Modal.Title>
          </Modal.Header>
          <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={this.props.van.images[0]}
                  alt = 'First Slide'
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={this.props.van.images[1]}
                  alt='Second Slide'
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block 1-100"
                  src={this.props.van.images[2]}
                  alt = 'Third Slide'
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>

          <Modal.Body>Includes: {this.props.van.interior_features}
            


          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.closeModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}



export default VanShow;