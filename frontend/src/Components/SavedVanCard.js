import React from 'react';
import { Card, Button, Jumbotron } from 'react-bootstrap';
import OrderForm from './OrderForm';


class SavedVanCard extends React.Component {

    state = {
        
        clicked: false
      }
    
    
      handleClick = () => {
    
        this.setState({
          clicked: true
        })
       
      }
    render() {

        return (
           

        
            <Card>
              <Card.Img variant="top" src={this.props.van.img_1} />
              <Card.Body>
                <Card.Title>{this.props.van.name}</Card.Title>
                <Card.Text>
                
                 Still available? {this.props.van.available ? 'Yes' : "No"}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
               <Button variant="info" onClick={() => this.handleClick()}> Instant Book
          {this.state.clicked ? <OrderForm van={this.props.van} key={this.props.van.id} 
                                            departure={this.props.location.state.departure}
                                            return={this.props.location.state.return}
                                            /> 
                                            : null}
          </Button>
              </Card.Footer>
    
            </Card>
        
          
        )
    }
}

export default SavedVanCard;