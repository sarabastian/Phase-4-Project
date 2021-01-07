import React from 'react';
import { Card, Button } from 'react-bootstrap';
import VanShow from './VanShow'

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
console.log(this.props.van.reviews)
        return (
           
            <Card>
              <Card.Img variant="top" src={this.props.van.img_1} />
              <Card.Body>
                <Card.Title>{this.props.van.name}</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
               <Button variant="info" onClick={() => this.handleClick()}> See More
          {this.state.clicked ? <VanShow van={this.props.van} key={this.props.van.id}/> : null}
          </Button>
              </Card.Footer>
            </Card>
           
          
        )
    }
}

export default SavedVanCard;