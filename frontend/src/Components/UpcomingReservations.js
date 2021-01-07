import React from "react";
import { Button, Jumbotron, Container, Carousel } from 'react-bootstrap'

class UpcomingReservations extends React.Component {

  render() {
  console.log(this.props.location.state)
  console.log(this.props.location.state.departure)
    return (

<Jumbotron fluid className="jumbo-2">
  <Container>
    <h1>{this.props.location.state.user.username}'s Upcoming Reservations</h1>
    <h2>{this.props.location.state.departure}</h2>
    
    <Carousel className="reservation">
    
  <Carousel.Item>
  <Carousel.Caption>
      <h2>{this.props.location.state.van.name}</h2>
      
    </Carousel.Caption>
    <img
      className="d-block w-100"
      src={this.props.location.state.van.img_1}
      alt="First slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={this.props.location.state.van.img_2}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h2>Pickup & Return: {this.props.location.state.van.location}</h2>
 
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={this.props.location.state.van.img_3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
   
  </Carousel.Item>
  
</Carousel>

  </Container>
  <br></br><br></br><br></br>
  <Button className="cancel-btn" variant="danger" margin="center">Cancel Reservation</Button>
</Jumbotron>

    )
  }


}

export default UpcomingReservations