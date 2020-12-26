import React from 'react';
import { Card, Button } from 'react-bootstrap';

class VanCard extends React.Component {
    
    render(){

        return(

<Card className="card-img-top img-fluid">
  <Card.Img variant="top" src={this.props.van.images[0].img_url} style={{ display: 'inline-block', width: '100%'}}/>
  <Card.Body>
    <Card.Title>{this.props.van.name}</Card.Title>
    <Card.Text>
   {this.props.van.description}
    </Card.Text>
    <Button variant="primary">See More</Button>
  </Card.Body>
</Card>

        )
    }
}

export default VanCard;
