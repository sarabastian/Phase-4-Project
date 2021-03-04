import React from "react";
import { Card, CardGroup, Jumbotron, Container } from 'react-bootstrap';
import MyReservationsCard from './MyReservationsCard';
import SavedVansNavbar from './Navbar/SavedVansNavbar'


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
            <div>
                <Container>
            <SavedVansNavbar/>
  </Container>
            <div>
                <Jumbotron >
            <CardGroup  >
                
<Jumbotron>
                <h1>My Reservations</h1>

                </Jumbotron>
               
                


{this.state.orders.map(order => <MyReservationsCard order={order} key={order.id} 

                                                 
                                                 
                                                 />)}
            
            
        </CardGroup>
       
        </Jumbotron>
        </div>
        </div>
        )
    }
}

export default MyReservationsContainer;