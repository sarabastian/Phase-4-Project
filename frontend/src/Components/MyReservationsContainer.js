import React from "react";
import { Card, CardGroup, Jumbotron } from 'react-bootstrap';
import MyReservationsCard from './MyReservationsCard';
import Navbar2 from './Navbar/Navbar2'

class MyReservationsContainer extends React.Component {

    state = {
        orders: [],
    }
    componentDidMount() {
        fetch('http://localhost:3001/api/v1/orders')
        .then(r => r.json())
        .then(orders => this.setState({orders}))
        
    }


    render() {
      
        return(
         
            <CardGroup >
                   <Navbar2 />
               
                <h1>My Reservations</h1>
       
                


{this.state.orders.map(order => <MyReservationsCard order={order} key={order.id} 

                                                 
                                                 
                                                 />)}
            
            
        </CardGroup>
        )
    }
}

export default MyReservationsContainer;