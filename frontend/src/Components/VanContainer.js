import React from 'react'
import VanCard from './VanCard'
import { CardDeck } from 'react-bootstrap';

class VanContainer extends React.Component {

    render() {
        return (
            <CardDeck >
                {this.props.vans.map(van => <VanCard van={van} key={van.id} />)}
            </CardDeck>
        )
    }
}

export default VanContainer;