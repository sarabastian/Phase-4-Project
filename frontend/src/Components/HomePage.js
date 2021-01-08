import React from "react";
// import ReactDOM from 'react-dom';
import Search from './Search'
// import VanContainer from './VanContainer'
import NavBar from './Navbar/NavBar';
// import Login from './LoginForm/Login';


class HomePage extends React.Component {



    handleShow = () => {
        this.setState({
            show: false
        })
    }

    render() {
        console.log(this.props.handleLogin)
        return (
            <div>
                <NavBar handleLogin={this.props.handleLogin} loginState={this.props.loginState} />

                <Search />


            </div>
        )
    }
}

export default HomePage;