import React from "react";
import { Button, Jumbotron, Container, Carousel } from 'react-bootstrap';
import { Link } from "react-router-dom";

class UpcomingReservations extends React.Component {

  handleCancel = () => {
    fetch(`http://localhost:3001/api/v1/orders/${this.props.location.state.id}`, {
    method: "DELETE",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
 
  })

    
  
}
  
  render() {
  console.log(this.props.location.state)
  console.log(this.props.location.state.id)
    return (

<Jumbotron fluid className="jumbo-2">
  <Container>
    <h1>{this.props.location.state.user.username}'s Upcoming Reservations</h1>
    <h2>{this.props.location.state.trip_dates[0].departure_date}-{this.props.location.state.trip_dates[0].return_date}</h2>
    
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
      
    </Carousel.Caption>
   
  </Carousel.Item>
  
</Carousel>

  </Container>
  <br></br><br></br><br></br>
  
<Link to={{
  pathname: "/",
  state: {
    user: this.props.location.state.user
  }
  
 }} >
  
  <Button className="cancel-btn" variant="danger" onClick={()=> this.handleCancel()}>Cancel Reservation</Button>
   </Link> 
</Jumbotron>

    )
  }


}

export default UpcomingReservations