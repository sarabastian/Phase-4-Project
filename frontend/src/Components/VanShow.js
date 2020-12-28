import React from 'react';
import { Modal, Button } from 'react-bootstrap';

class VanShow extends React.Component {



  render() {
    return (
      <>
        <div
          className="van-show"
          
        >
    
        </div>
        <Modal show={this.props.show} onHide={this.props.closeModal}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title">
          <Modal.Header  closeButton>
            <Modal.Title>{this.props.van.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>Includes: {this.props.van.interior_features}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.closeModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}



export default VanShow;