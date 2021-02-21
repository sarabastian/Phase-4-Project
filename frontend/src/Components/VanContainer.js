import React from 'react'
import VanCard from './VanCard'
import { Card, CardGroup } from 'react-bootstrap';

class VanContainer extends React.Component {

   

    // componentDidMount() {
  

    //     fetch(`http://localhost:3001/api/v1/users/${parseInt(localStorage.token)}`)
    //     .then(r => r.json())
    //     .then(user => {
    //         this.setState({
             
    //            user: user
    //         })
    //     }
    //     )
    // }

    render() {

    
        return (
            <CardGroup >
                
                {this.props.vans.map(van => <VanCard van={van} key={van.id} 
                                                     departure={this.props.departure} 
                                                     return={this.props.return}
                                                     
                                                     />)}
                
            </CardGroup>
        )
    }
}

export default VanContainer;