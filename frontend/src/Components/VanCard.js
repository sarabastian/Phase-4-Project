import React from 'react';
import { Card, Button } from 'react-bootstrap';
import VanShow from './VanShow';
import SavedVansContainer from './SavedVansContainer';
import Navbar from './Navbar/Navbar';
import { Link } from "react-router-dom";



class VanCard extends React.Component {

  state = {

    isOpen: false,
    liked: false,
    // logged_in: false
  }


  
  // saveVan = () => {
    
  

  // }


  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });




  render() {

    return (

      <Card className="card-img-top img-fluid">
        <Card.Img variant="top" src={this.props.van.img_1} style={{ display: 'inline-block', width: '100%' }} />

        <Card.Body>

          <Card.Title><em>{this.props.van.name}</em></Card.Title>
          <Card.Text>
            {this.props.van.description}
          </Card.Text>
          <Card.Text>
            <br></br>${this.props.van.rates}/day
    </Card.Text>
          <Button onClick={() => this.openModal()} variant="info">Explore More </Button>
          {this.state.isOpen ? <VanShow openModal={this.openModal} closeModal={this.closeModal}
            show={this.state.isOpen}
            key={this.props.van.id}
            van={this.props.van}
            departure={this.props.departure}
            return={this.props.return}

          /> : null}

             
        </Card.Body>
      </Card>

    )
  }
}

export default VanCard;

