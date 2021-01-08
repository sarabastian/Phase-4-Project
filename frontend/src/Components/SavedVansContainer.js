import React from 'react';
import { Row, Col, CardDeck, Jumbotron } from 'react-bootstrap';
import SavedVanCard from './SavedVanCard';
import Navbar2 from './Navbar/Navbar2'

class SavedVansContainer extends React.Component {

    state = {
        saved_vans: []
    }
    componentDidMount(){
        fetch('http://localhost:3001/api/v1/saved_vans')
        .then(r => r.json())
        .then(data => this.setState({
            saved_vans: data
        }))
    }


    render() {
      console.log(this.state.saved_vans)
  
        return(
       
            <CardDeck className="saved-card-deck">
                 <Navbar2/>
                 {/* <Jumbotron> */}
            {/* Dates Requested: {this.props.location.state.departure} - {this.props.location.state.return} */}
            {/* </Jumbotron> */}
                 <Row  > 
                     <Col >
                   {this.state.saved_vans.map(van => 
                                    <SavedVanCard van={van} key={van.id} 
                                                handleCancel={this.handleCancel}
                                                    // departure={this.props.location.state.departure}
                                                    // return={this.props.location.state.return}
                                                   
                                                     />)}
                    
                    
                    </Col>
           
                </Row>
            </CardDeck>
        )
    }
}

export default SavedVansContainer;