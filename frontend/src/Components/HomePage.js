import React from "react";
// import ReactDOM from 'react-dom';
import Search from './Search';
// import VanContainer from './VanContainer'
import Navbar from './Navbar/Navbar';
// import Login from './LoginForm/Login';


class HomePage extends React.Component {



    render() {
        return (
            <div>
                <Navbar handleLogin={this.props.handleLogin} login={this.props.login} />

                <Search handleLogin={this.props.handleLogin} login={this.props.login}/>


            </div>
        )
    }
}

export default HomePage;