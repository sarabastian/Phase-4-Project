import React from 'react';
import { Card, Button, Modal } from 'react-bootstrap';
import VanShow from './VanShow'


class VanCard extends React.Component {

    state = {

        isOpen: false
    }



  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });


    render(){

        return(

<Card className="card-img-top img-fluid">
  <Card.Img variant="top" src={this.props.van.images[0].img_url} style={{ display: 'inline-block', width: '100%'}}/>
  <Card.Body>
    <Card.Title>{this.props.van.name}</Card.Title>
    <Card.Text>
   {this.props.van.description}
   </Card.Text>
   <Card.Text> 
   Rates: ${this.props.van.rates}/day
    </Card.Text>
    <Button onClick={() => this.openModal()} variant="primary">See More </Button>
    {this.state.isOpen ? <VanShow openModal={this.openModal} closeModal={this.closeModal}
                                    show={this.state.isOpen}
                                    key={this.props.van.id}
                                    van={this.props.van}
                                    /> : null}
  </Card.Body>
</Card>

        )
    }
}

export default VanCard;
