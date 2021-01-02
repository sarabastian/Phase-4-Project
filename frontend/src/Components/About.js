import React from "react";
import { Card, Button, Figure } from "react-bootstrap"

class About extends React.Component {

    render() {
        return (
            <Card className="text-center">
                <Card.Header>How it Works</Card.Header>
                <Card.Body>
                    <Card.Title>An Easy and Trusted Process</Card.Title>
                    <Card.Text>
                        <Figure>
                            <Figure.Image
                                width={171}
                                height={180}
                                alt="171x180"
                                src="https://www.flaticon.com/svg/static/icons/svg/1559/1559866.svg"
                            />
                            <Figure.Caption>
                              Browse vans based on your adventure dates and location
                            </Figure.Caption>
                        </Figure>
                        <br/>
                        <Figure>
                            <Figure.Image
                                width={171}
                                height={180}
                                alt="171x180"
                                src="https://www.flaticon.com/svg/static/icons/svg/1719/1719435.svg"
                            />
                            <Figure.Caption>
                                Book Your Van
                            </Figure.Caption>
                        </Figure>
                        <br/>
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
                        <br/>
                        <Figure>
                            <Figure.Image
                                width={171}
                                height={180}
                                alt="171x180"
                                src="https://www.flaticon.com/svg/static/icons/svg/1967/1967728.svg"
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