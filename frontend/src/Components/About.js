import React from "react";
import { Card, Figure, Jumbotron } from "react-bootstrap"
import Reviews from './Reviews'

class About extends React.Component {

    state = {
        showReviews: true
    }

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
                                <br></br>Book Your Van
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
                                Return Van & Leave Us a Review
                            </Figure.Caption>
                           
                        </Figure>
                        <br></br>
                        <Jumbotron>
                            <Reviews />
                        </Jumbotron>
                    </Card.Text>
                
                </Card.Body>
             
            </Card>
       
            
            
        )
    }
}

export default About;