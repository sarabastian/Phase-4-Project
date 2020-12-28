import React from 'react'
import VanCard from './VanCard'
import { CardColumns } from 'react-bootstrap';

class VanContainer extends React.Component {

    render() {
        return (
            <CardColumns itemsPerRow={3}>
                {this.props.vans.map(van => <VanCard van={van} key={van.id} />)}
            </CardColumns>
        )
    }
}

export default VanContainer;