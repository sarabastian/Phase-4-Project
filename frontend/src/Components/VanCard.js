import React from 'react';
import { Card, Button } from 'react-bootstrap';
import VanShow from './VanShow';

import Navbar from './Navbar/Navbar';


class VanCard extends React.Component {

  state = {

    isOpen: false,
    liked: false,
    // logged_in: false
  }


  handleLikes = () => {

    this.setState({
      liked: !this.state.liked
    })
    fetch('http://localhost:3001/api/v1/saved_vans', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        
    },
    body: JSON.stringify({
        user_id: localStorage.user_id,
        van_id: this.props.van.id
    }),
})
.then(r => r.json())
.then(van => console.log(van))


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
          {' '} <Button variant="danger" onClick={() =>
            this.handleLikes()} >{this.state.liked ? '♥' : '♡'}
          </Button>
        </Card.Body>
      </Card>

    )
  }
}

export default VanCard;

