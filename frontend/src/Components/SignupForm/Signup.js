import React from 'react';
import { Button, Form, FormGroup, Modal }
    from 'react-bootstrap';
// import { MDBIcon, MDBContainer, MDBBtn } from 'mdbreact';
import { FacebookLoginButton } from 'react-social-login-buttons';


class Signup extends React.Component {
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
        fetch(`http://localhost:3001/api/v1/users`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: this.state
            })
        }).then((response) => response.json())
        .then((user) => console.log(user))
    }

    render () {   
    return (
        <section>
            <Modal show={this.props.show} onHide={this.props.onHide} >
            <Form className="Signup-form" onSubmit={this.handleSubmit} style={{width:"100%", maxWidth:"330px", padding:"15px", margin:"auto", height:"100%"}}>
                <h2 className="text-center">Sign up</h2>
                <FormGroup>
                    <Form.Label>Email</Form.Label>
                    <Form.Control name='username'  placeholder="Email" value={this.state.username} onChange={this.handleInput} />
                </FormGroup>
                <FormGroup>
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" value={this.state.password} onChange={this.handleInput} />
                </FormGroup>
                <Button type='submit' className="btn-lg btn-dark btn-block">Log in</Button>
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

export default Signup;