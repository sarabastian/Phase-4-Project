import React, { Component } from 'react';
import './Login.css';
import { Button, Form, FormGroup, Label, Input }
    from 'react-bootstrap';
// import { MDBIcon, MDBContainer, MDBBtn } from 'mdbreact';
import { FacebookLoginButton } from 'react-social-login-buttons';

const Login = () => {
    return (
        <section>
            <Form className="login-form">
                <h1>
                    {/* <span className="font-weight-bold">VanBnB</span> */}
                </h1>
                <h2 className="text-center">Welcome</h2>
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
        </section>
    )
}

export default Login;