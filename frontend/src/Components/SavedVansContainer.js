import React from 'react';
import { CardDeck } from 'react-bootstrap';
import SavedVanCard from './SavedVanCard'

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
            <CardDeck >
                {this.state.saved_vans.map(array => <SavedVanCard van={array.van} key={array.van.id} 
                                                   
                                                     />)}
            </CardDeck>
        )
    }
}

export default SavedVansContainer;