import React from "react";
import { Card, Jumbotron, Container, Carousel } from 'react-bootstrap'

class UpcomingReservations extends React.Component {

  render() {
  console.log(this.props.location.state)
  console.log(this.props.location.state.departure)
    return (

<Jumbotron fluid>
  <Container>
    <h1>{this.props.location.state.user.username}'s Upcoming Reservations</h1>
    <Carousel>
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
</Jumbotron>

    )
  }


}

export default UpcomingReservations