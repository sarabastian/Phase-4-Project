import React from "react";
import { Carousel } from "react-bootstrap"

class Reviews extends React.Component {

    state ={
        reviews: []
    }

    componentDidMount() {
        fetch('http://localhost:3001/api/v1/reviews')
        .then(r => r.json())
        .then(reviews => this.setState({reviews}))
    }

    render() {

     
        
    return (
        <Carousel>
            <br></br>
            <h2>Check out some of our reviews</h2>
            <Carousel.Item>
                <img
                   className="d-block w-100"
                   src="holder.js/800x400?text=Third slide&bg=20232a"
                   alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>{this.state.reviews.map(r => r.comment)}</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Second slide&bg=282c34"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Third slide&bg=20232a"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
    }
}

export default Reviews;