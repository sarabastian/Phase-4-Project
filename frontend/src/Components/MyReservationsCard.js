import React from "react";
import { Card, Button, Jumbotron} from 'react-bootstrap';


class MyReservationsCard extends React.Component {

    state = {

        show: true
    }

    handleCancel = () => {
        this.setState({
            show: false
        })
        fetch(`http://localhost:3001/api/v1/orders/${this.props.order.id}`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }

     
      })
      // .then(r=> r.json())
      // .then(alert('Reservation was canceled'))
        
      
    }
    
    render() {

        return(
          this.state.show ? 
            <Card className="">
           


    
            <Card.Body>
            <Card.Img variant="top" src={this.props.order.van.img_1} style={{ display: 'inline-block', width: '100%' }} />
              <Card.Title>{this.props.order.van.name}</Card.Title>
              <Card.Text>
                {this.props.order.trip_dates[0].departure_date} - {this.props.order.trip_dates[0].return_date}
              </Card.Text>
              <Card.Text>
                <br></br>${this.props.order.van.rates}/day
        </Card.Text>
        <Button className="cancel-btn" variant="danger" onClick={()=> this.handleCancel()}>Cancel Reservation</Button> 

  
              
                
    
        
    
                 
            </Card.Body>


          </Card>
          : null 
        )
    }
}

export default MyReservationsCard