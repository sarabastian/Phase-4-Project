import React from 'react'
import VanCard from './VanCard'
import { CardGroup } from 'react-bootstrap';

class VanContainer extends React.Component {
    render() {
        return(
        <CardGroup itemsPerRow={3}>
        {this.props.vans.map(van => <VanCard van={van} key={van.id}/>)}
        </CardGroup>
        )
    }
}

export default VanContainer;