import React from "react";
import { Card, Button, Figure } from "react-bootstrap"

class About extends React.Component {

    render() {
        return (
            <Card className="text-center">
                <Card.Header>How it Works</Card.Header>
                <Card.Body>
                    <Card.Title>A Trusted and Easy Process</Card.Title>
                    <Card.Text>
                        <Figure>
                            <Figure.Image
                                width={171}
                                height={180}
                                alt="171x180"
                                src="https://cdn3.iconfinder.com/data/icons/local-tourism/512/tourism-travel-21-256.png"
                            />
                            <Figure.Caption>
                              Browse vans based on your adventure dates and location
                            </Figure.Caption>
                        </Figure>
                        <Figure>
                            <Figure.Image
                                width={171}
                                height={180}
                                alt="171x180"
                                src="https://cdn0.iconfinder.com/data/icons/travel-outline-19/64/Booking_1-256.png"
                            />
                            <Figure.Caption>
                                Book Your Van
                            </Figure.Caption>
                        </Figure>
                        <Figure>
                            <Figure.Image
                                width={171}
                                height={180}
                                alt="171x180"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx0IOLw4eWyatZDYlxNNDoH8V0LqbkkL6CZA&usqp=CAU"
                            />
                            <Figure.Caption>
                                Pick-up van - Happy Travels!
                            </Figure.Caption>
                        </Figure>
                        <Figure>
                            <Figure.Image
                                width={171}
                                height={180}
                                alt="171x180"
                                src="https://cdn4.iconfinder.com/data/icons/network-security-4/512/N_T_1142Artboard_1-256.png"
                            />
                            <Figure.Caption>
                                Return Van 
                            </Figure.Caption>
                        </Figure>
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
        )
    }
}

export default About;