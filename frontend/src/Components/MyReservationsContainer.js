import React from "react";
import { CardGroup } from 'react-bootstrap';
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
    render() {
      
        return(

            <CardGroup >
                
            {this.state.orders.map(order => <MyReservationsCard order={order} key={order.id} 
                                                 
                                                 
                                                 />)}
            
        </CardGroup>
        )
    }
}

export default MyReservationsContainer;