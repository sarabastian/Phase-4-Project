import React from "react";
import { Form, Button, Accordion, Card, Row, Col, FormGroup } from 'react-bootstrap';
import { FacebookLoginButton } from 'react-social-login-buttons';
import { Link } from "react-router-dom";


class OrderForm extends React.Component {

    state = {
        order: [],
        nights: null
    }

handleSubmit = () => {
    fetch('http://localhost:3001/api/v1/orders', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            // 'auth-key': localStorage.getItem('token')
        },
        body: JSON.stringify({
            user_id: localStorage.user_id,
            van_id: this.props.location.state.van.id
        }),
    })
    .then(r => r.json())
    .then(order => {
       
        this.props.history.push("/upcoming-reservations", 
    order)})
    

}

handleNumber = (e) => {

    this.setState({
        nights: parseInt(e.target.value)
    })
}

calculateTotal = () => {
    return(
        this.state.nights*this.props.location.state.van.rates
        )
}



    render() {
        console.log(this.props.location)
        
       
        // const date = getDateFromFormat()
        return (

            <Form className="order-form">
                <Accordion defaultActiveKey="0">
                    
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                1. Start your booking
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>



                <Form className="signup-order">
                
                <h2 className="text-center">Sign up</h2>
                <FormGroup>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email"/>
                </FormGroup>
                <FormGroup>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"/>
                </FormGroup>
                <Button className="btn-lg btn-dark btn-block">Log in</Button>
                <div className="text-center pt-3">
                    Or continue with social media
                </div>
                <FacebookLoginButton/>
            </Form>

                                <Form.Group id="formGridCheckbox">
                                    <Form.Check type="checkbox"
                                        label="I certify that I am at least 25 years old at the time of rental and have a valid drivers license" />
                                </Form.Group>
                              
                            
                              
                             
                                    
                                <Form className="login-order">
                <h1>
                  
                </h1>
                <h4 className="text-center">Already have an account?</h4>
                <FormGroup>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email"/>
                </FormGroup>
                <FormGroup>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"/>
                </FormGroup>
                <Button className="btn-lg btn-dark btn-block">Log in</Button>
                <div className="text-center pt-3">
                    Or continue with social media
                </div>
                <FacebookLoginButton/>
                
            </Form>
            
          
            
         
                            </Card.Body>
                          
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                2. Trip Details
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                Review your itinerary
                                <br></br>
                                
                                <Row>
                                    <Col xs={2}>
                                    <Form.Text className="text-muted">
                                        Departure Date
                                    </Form.Text>
                                    <Form.Control placeholder={this.props.location.state.departure} 
                                        label= "Departure"/>
                                    </Col>
                                    <Col xs={2}>
                                    <Form.Text className="text-muted">
                                        Return Date
                                    </Form.Text>
                                    <Form.Control placeholder={this.props.location.state.return} />
                                    </Col>
                                    </Row>
                                    <br></br>
                                    <Form.Group>
                                    <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Confirm Number of Nights</Form.Label>
    <Form.Control as="select" onChange={(e) => this.handleNumber(e)}>
      <option>30</option>
      <option>29</option>
      <option>28</option>
      <option>27</option>
      <option>26</option>
      <option>25</option>
      <option>24</option>
      <option>23</option>
      <option>22</option>
      <option>21</option>
      <option>20</option>
      <option>19</option>
      <option>18</option>
      <option>17</option>
      <option>16</option>
      <option>15</option>
      <option>14</option>
      <option>13</option>
      <option>12</option>
      <option>11</option>
      <option>10</option>
      <option>9</option>
      <option>8</option>
      <option>7</option>
      <option>6</option>
      <option>5</option>
      <option>4</option>
      <option>3</option>
      <option>2</option>
      <option>1</option>
    </Form.Control>
  </Form.Group>
                                     <Row>
                                        <Col xs={3}>
                                        <Form.Label>Pick-Up & Return Location</Form.Label>
                            <Form.Control placeholder={this.props.location.state.van.location} disabled />
   
                                        </Col>
                                    </Row>                         
                               
                                    </Form.Group>
                                
                                <br></br>
                                <Card className="van-order-card"  style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.location.state.van.img_1} style={{ display: 'inline-block', width: '100%' }} />
                    <Card.Body>
                        <Card.Title><em>{this.props.location.state.van.name}</em></Card.Title>
                        <Card.Text>
                        <strong>Your total is ${this.calculateTotal()}</strong>
                        <br></br>
                        <br></br>
                            
                        </Card.Text>
                        <Card.Text>
                            <br></br>${this.props.location.state.van.rates}/day
</Card.Text>


                    </Card.Body>
                </Card>
                             
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                
                
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                3. Confirm and Pay
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body>

                            <div class="col-md-6 offset-md-3">
                    <span class="anchor" id="formPayment"></span>
                 

                   
                    <div class="card card-outline-secondary">
                        <div class="card-body">
                            <h3 class="text-center">Credit Card Payment</h3>
                          
                            <div class="alert alert-info p-2 pb-3">
                                <a class="close font-weight-normal initialism" data-dismiss="alert" href="#"><samp>×</samp></a> 
                                CVC code is required.
                            </div>
                            <form class="form" role="form" autocomplete="off">
                                <div class="form-group">
                                    <label for="cc_name">Card Holder's Name</label>
                                    <input type="text" class="form-control" id="cc_name" pattern="\w+ \w+.*" title="First and last name" required="required"></input>
                                </div>
                                <div class="form-group">
                                    <label>Card Number</label>
                                    <input type="text" class="form-control" autocomplete="off" maxlength="20" pattern="\d{16}" title="Credit card number" required=""></input>
                                </div>
                                <div class="form-group row">
                                    <label class="col-md-12">Card Exp. Date</label>
                                    <div class="col-md-4">
                                        <select class="form-control" name="cc_exp_mo" size="0">
                                            <option value="01">01</option>
                                            <option value="02">02</option>
                                            <option value="03">03</option>
                                            <option value="04">04</option>
                                            <option value="05">05</option>
                                            <option value="06">06</option>
                                            <option value="07">07</option>
                                            <option value="08">08</option>
                                            <option value="09">09</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                        </select>
                                    </div>
                                    <div class="col-md-4">
                                        <select class="form-control" name="cc_exp_yr" size="0">
                                            <option>2018</option>
                                            <option>2019</option>
                                            <option>2020</option>
                                            <option>2021</option>
                                            <option>2022</option>
                                        </select>
                                    </div>
                                    <div class="col-md-4">
                                        <input type="text" class="form-control" autocomplete="off" maxlength="3" pattern="\d{3}" title="Three digits at back of your card" required="" placeholder="CVC"></input>
                                    </div>
                                </div>
                                <div class="row">
                                    <label class="col-md-12">Amount</label>
                                </div>
                                <div class="form-inline">
                                    <div class="input-group">
                                        <div class="input-group-prepend"><span class="input-group-text">$</span></div>
                                        <input type="text" class="form-control text-right" id="exampleInputAmount" placeholder={this.calculateTotal()}></input>
                                        <div class="input-group-append"><span class="input-group-text">.00</span></div>
                                    </div>
                                </div>
                           <br></br>
                                <div class="form-group row">
                                    <div class="col-md-6">
                                        <button type="reset" class="btn btn-default btn-lg btn-block">Cancel</button>
                                    </div>
                                    <div class="col-md-6">
                                        <button type="submit" class="btn btn-success btn-lg btn-block" onClick={()=> this.handleSubmit()}>Submit</button>
                                    </div>
                                </div>
                              
                                </form>
                              
                        </div>
                    </div>


       
                    </div>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    </Accordion>
                   
   
                </Form>



        )
    }
}

export default OrderForm;