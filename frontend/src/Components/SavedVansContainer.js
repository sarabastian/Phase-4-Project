import React from 'react';
import { Row, Col, CardDeck, Jumbotron } from 'react-bootstrap';
import SavedVanCard from './SavedVanCard';
import Navbar from './Navbar/Navbar'

class SavedVansContainer extends React.Component {

    state = {
        saved_vans: [],
        show: true
    }
    componentDidMount(){
        fetch('http://localhost:3001/api/v1/saved_vans')
        .then(r => r.json())
        .then(data => this.setState({
            saved_vans: data
        }))
    }

    handleCancel = (id) => {
        this.setState({
            show: false
        })
        fetch(`http://localhost:3001/api/v1/saved_vans/${id}`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
     
      })
      
    }
    render() {
      console.log(this.state.saved_vans)
  
        return(
       
            <CardDeck className="saved-card-deck">
                 <Navbar/>
                 <Jumbotron>
            {/* Dates Requested: {this.props.location.state.departure} - {this.props.location.state.return} */}
            </Jumbotron>
                 <Row  > 
                     <Col >
                    {this.state.show ? this.state.saved_vans.map(array => 
                                    <SavedVanCard van={array.van} key={array.van.id} 
                                                handleCancel={this.handleCancel}
                                                    // departure={this.props.location.state.departure}
                                                    // return={this.props.location.state.return}
                                                   
                                                     />) 
                                                    : null}
                    
                    
                    </Col>
           
                </Row>
            </CardDeck>
        )
    }
}

export default SavedVansContainer;