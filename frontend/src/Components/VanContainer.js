import React from 'react'
import VanCard from './VanCard'
import { CardColumns } from 'react-bootstrap';

class VanContainer extends React.Component {

    render() {
        return (
            <CardColumns itemsPerRow={2}>
                {this.props.vans.map(van => <VanCard van={van} key={van.id} />)}
            </CardColumns>
        )
    }
}

export default VanContainer;