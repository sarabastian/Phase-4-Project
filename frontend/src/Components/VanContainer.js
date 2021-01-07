import React from 'react'
import VanCard from './VanCard'
import { Card, CardGroup } from 'react-bootstrap';

class VanContainer extends React.Component {

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