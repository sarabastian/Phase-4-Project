import React from 'react';
import { Card, Button, Jumbotron } from 'react-bootstrap';
import OrderForm from './OrderForm';
import Navbar from './Navbar/Navbar'


export default class SavedVanCard extends React.Component {
  
componentDidMount(){
    fetch('http://localhost:3001/api/v1/saved_vans')
    .then(r => r.json())
    .then(data => this.setState({
        saved_vans: data
    }))
}
    state = {
        
        clicked: false,
        liked: true,
        show: true,
        saved_vans: []
      }
    
   
      handleCancel = () => {
        this.setState({
            show: false,
            liked: false
        })
        fetch(`http://localhost:3001/api/v1/saved_vans/${this.props.van.id}`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
     
      })
      .then(r => r.json())
      .then(r => {
        console.log(r)
        // this.setState({
        // saved_vans: [...saved_vans, r]
        // })
      })}
      
      
    
    
      handleClick = () => {
    
        this.setState({
          clicked: true
        })
       
      }
    render() {
      const van = this.props.van 
      console.log(van)
        return (
           <div>
          <Navbar/>
          {this.state.show ? 
            <Card>
   
    <Card.Img variant="top" src={this.props.van.img_1} />
              
              <Card.Body>
                {/* <Card.Img variant="top" src={this.props.van.van.img_1} /> */}
                <Card.Title>{this.props.van.name}</Card.Title>
                <Card.Text>
                
                 Still available? {this.props.van.available ? 'Yes' : "No"}
                </Card.Text>
             
                 
              <Card.Footer>
               <Button variant="info" onClick={() => this.handleClick()}> Instant Book
               {this.state.clicked ? <OrderForm van={this.props.van} key={this.props.van.id} 
                                            departure={this.props.location.state.departure}
                                            return={this.props.location.state.return}
                                            /> 
                                            : null}
          </Button>

          <Button variant="danger" onClick={() =>
            this.handleCancel()} >{
            this.state.liked ? '♥'  : '♡'} 
          </Button> 
              </Card.Footer>
              </Card.Body>
          

            </Card>
            : null  }
          
        
      
        </div>
        )

            }
          }