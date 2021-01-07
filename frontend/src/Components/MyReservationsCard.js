import React from "react";
import { Card, Button} from 'react-bootstrap';

class MyReservationsCard extends React.Component {

    
    render() {

        return(
            <Card className="card-img-top img-fluid">
        
    
            <Card.Body>
    
              <Card.Title>{this.props.order.van.name}</Card.Title>
              <Card.Text>
                {this.props.order.van.description}
              </Card.Text>
              <Card.Text>
                <br></br>${this.props.order.van.rates}/day
        </Card.Text>
              <Button variant="info">Explore More </Button>
              
                
    
        
    
                 
            </Card.Body>
          </Card>
        )
    }
}

export default MyReservationsCard