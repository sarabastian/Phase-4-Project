import React from "react";
import { Carousel, Accordion, Card, Button } from "react-bootstrap"

class Reviews extends React.Component {

    state = {
        reviews: []
    }

    componentDidMount() {
        fetch('http://localhost:3001/api/v1/reviews')
            .then(r => r.json())
            .then(reviews => this.setState({ reviews }))
    }

    render() {



        return (
            <Accordion defaultActiveKey="0">
                <h3>What people are saying about us</h3>
                <br></br>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            <img src="https://www.hinckleyprecisiondental.com/wp-content/uploads/2019/11/5-stars-png-transparent-300x200.png" ></img>
            </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body></Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            Read more
            </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>{this.state.reviews.map((r, index) => (
                            <div key={index}>
                                {r.comment}
                               <br></br> -<em>{r.user.username}</em>
                            </div>
                            
                         ) )}
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>

        )
    }
}

export default Reviews;