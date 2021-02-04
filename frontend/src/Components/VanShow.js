import React from 'react';
import { Modal, Button, Carousel, Badge, Tab, Nav, Col, Row, ListGroup } from 'react-bootstrap';
import { Link } from "react-router-dom";

class VanShow extends React.Component {

  state = {
    book: false,
    liked: false,
    dates: [],
    saved_vans: []
  }

  handleLikes = () => {
console.log(localStorage.token)
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
        user_id: this.props.user.id,
        van_id: this.props.van.id
    }),
})
.then(r => r.json())
.then(van => this.setState({
  saved_vans: [...this.state.saved_vans, van]
}))


  }

// componentDidMount() {
//   fetch('http://localhost:3001/api/v1/trip_dates', {
//         method: 'POST',
     
//         headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json'
            
//         },
//         body: JSON.stringify({
//             departure_date: this.props.departure,
//             return_date: this.props.return,
//             van_id: this.props.van.id
//         }),
//     })
//     .then(r => r.json())
//     .then(dates => this.setState({
//       dates: dates
//     }))
// }

componentDidMount() {
  fetch('http://localhost:3001/api/v1/saved_vans')
  .then(r=> r.json())
  .then(result => this.setState({
    saved_vans: result
  }))
}

  handleBooking = () => {
    this.setState({ book: true })
    
  }


  render() {
    console.log(this.props.departure)

    const alreadyLiked = this.state.saved_vans.filter(s => s.van_id === this.props.van.id && s.user_id === this.props.user.id)

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
            <Modal.Title>{this.props.van.name} {'                         '}
              <Badge  variant="success">
               Available for {this.state.dates.departure_date} - {this.state.dates.return_date}
              </Badge>  
            </Modal.Title>
          </Modal.Header>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={this.props.van.img_1}
                alt='First Slide'
              />
            
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={this.props.van.img_2}
                alt='Second Slide'
              />

              <Carousel.Caption>
                <h3>Pick-up and Return:</h3>
                <p>{this.props.van.location}</p>

              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block 1-100"
                src={this.props.van.img_3}
                alt='Third Slide'
              />

             
            </Carousel.Item>
          </Carousel>

          <Modal.Body>
            <ListGroup variant="flush" horizontal>
              <ListGroup.Item>Camper Van</ListGroup.Item>
              <ListGroup.Item>{this.props.van.description}</ListGroup.Item>
              <ListGroup.Item>{this.props.van.location}</ListGroup.Item>
              
             
            </ListGroup>
            <br></br>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row>
                <Col sm={3}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Amenities</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Utilities</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Rates</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fourth">Reviews</Nav.Link>
                    </Nav.Item>
            
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      {this.props.van.interior_features}
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      {this.props.van.utilities}
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      ${this.props.van.rates}/day
                    </Tab.Pane>
                    <Tab.Pane eventKey="fourth">
                      <em>{this.props.van.reviews.map(r => r.comment)}</em>
                    </Tab.Pane>
        
                    
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>

            <br></br>
            <br></br>
            <h5>
              {this.props.van.pet_friendly ? <Badge pill variant="success">
                Pet-friendly
              </Badge> : <Badge pill variant="danger">
                  Not pet-friendly
              </Badge>}{' '}
          

              <Badge pill variant="info">{this.props.van.size}</Badge></h5>


          </Modal.Body>
          <Modal.Footer>
          <Link to={{
            pathname: "/book",
            state: {
              van: this.props.van,
              departure: this.props.departure,
              return: this.props.return
              // departure: this.props.dates.departure_date,
              // return: this.state.dates.return_date
            }
            
           }}>   <Button variant="info"> Book Now</Button> </Link>
     
          
            <Button variant="info" onClick={this.props.closeModal}>Close</Button>
            {alreadyLiked.length> 0 ?           
            <Button variant="danger" > ♥
          </Button>  :  
          <Button variant="danger" onClick={() =>
            this.handleLikes()} >♡
          </Button> 
  }

          </Modal.Footer>
         
        </Modal>

      </>
    );
  }
}



export default VanShow;
