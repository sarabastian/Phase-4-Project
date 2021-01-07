import React from 'react';
import { withRouter } from 'react-router';
// import './Login.css';
import { Button, Form, FormGroup, Modal }
    from 'react-bootstrap';
// import { MDBIcon, MDBContainer, MDBBtn } from 'mdbreact';
import { FacebookLoginButton } from 'react-social-login-buttons';


class Login extends React.Component {
    state = ({
        username: "",
        password: ""
    })

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
    
        fetch('http://localhost:3001/api/v1/login',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            user: this.state
          })
        }).then((response) => response.json())
        // .then(data => console.log(data.auth_key))
        .then(data => {
            // if(token.hasOwnProperty('token')){
                console.log(data.auth_key)
                localStorage.setItem('token', data.user_info.user_id)
                this.props.history.push('/')
            // }else{
            //     alert('login failed...')
            // }
        })
    }
    


    render () {
        
    return (
        <section>
            <Modal show={this.props.show} onHide={this.props.onHide} >
            <Form onSubmit={this.handleSubmit} className="login-form" style={{width:"100%", maxWidth:"330px", padding:"15px", margin:"auto", height:"100%"}}>
                <h1>
                    {/* <span className="font-weight-bold">VanBnB</span> */}
                </h1>
                <h2 className="text-center">Welcome</h2>
                <FormGroup>
                    <Form.Label>Username</Form.Label>
                    <Form.Control name="username" placeholder="Username" onChange={this.handleInput} value={this.state.username} />
                </FormGroup>
                <FormGroup>
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" onChange={this.handleInput} value={this.state.password} />
                </FormGroup>
                <Button onClick={this.props.onHide} type="submit" className="btn-lg btn-dark btn-block">Log in</Button>
                <div className="text-center pt-3">
                    Or continue with social media
                </div>
                <FacebookLoginButton/>
            </Form>
            </Modal>
        </section>
        )
    }
}
export default withRouter(Login);

