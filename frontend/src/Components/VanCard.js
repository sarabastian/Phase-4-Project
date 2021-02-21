import React from 'react';
import { Card, Button } from 'react-bootstrap';
import VanShow from './VanShow';




class VanCard extends React.Component {

  state = {

    isOpen: false,
    liked: false,
    dates: '',
    isloggedin: false,
    user: {}
    // logged_in: false
  }


  // saveVan = () => {


  componentDidMount() {
    this.handleLogin();
    fetch(`http://localhost:3001/api/v1/users/${parseInt(localStorage.token)}`)
      .then(r => r.json())
      .then(user => {
        this.setState({

          user: user
        })
      }
      )
  }

  handleLogin = () => {
    if (localStorage.getItem('token')) {
      this.setState({ isloggedin: true })
    }
  }

  openModal = () => {

    this.setState({ isOpen: true })

  }

  closeModal = () => this.setState({ isOpen: false });


  render() {

    console.log(this.props.departure)
    return (

      <Card className="card-img-top img-fluid">
        <Card.Img variant="top" src={this.props.van.img_1} style={{ display: 'inline-block', width: '100%' }} />

        <Card.Body>

          <Card.Title><em>{this.props.van.name}</em></Card.Title>
          <Card.Text>
            {this.props.van.description}
          </Card.Text>
          <Card.Text>
            <br></br>${this.props.van.rates}/day
    </Card.Text>
          <Button onClick={() => this.openModal()} variant="info">Explore More </Button>
          {this.state.isOpen ? <VanShow openModal={this.openModal} closeModal={this.closeModal}
            show={this.state.isOpen}
            key={this.props.van.id}
            van={this.props.van}
            departure={this.props.departure}
            return={this.props.return}
            user = {this.state.user}

          /> : null}


        </Card.Body>
      </Card>

    )
  }
}

export default VanCard;

