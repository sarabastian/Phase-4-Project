import React from "react";
import { CardGroup, Jumbotron } from 'react-bootstrap';
import MyReservationsCard from './MyReservationsCard'

class MyReservationsContainer extends React.Component {

    state = {
        orders: []
    }
    componentDidMount() {
        fetch('http://localhost:3001/api/v1/orders')
        .then(r => r.json())
        .then(orders => this.setState({orders}))
        
    }

    handleCancel = () => {
        fetch(`http://localhost:3001/api/v1/orders/${this.props.order.id}`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
     
      })
    
        
      
    }
    render() {
      
        return(
          
            <CardGroup >
                  <Jumbotron fluid className="jumbo-2">

<h1>My Reservations</h1>
</Jumbotron>
            {this.state.orders.map(order => <MyReservationsCard order={order} key={order.id} 
                                                 
                                                 
                                                 />)}
            
        </CardGroup>
        )
    }
}

export default MyReservationsContainer;