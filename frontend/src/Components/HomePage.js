import React from "react";
// import ReactDOM from 'react-dom';
import Search from './Search'
// import VanContainer from './VanContainer'
import Navbar from './Navbar/Navbar';
// import Login from './LoginForm/Login';


class HomePage extends React.Component {



    handleShow = () => {
        this.setState({
            show: false
        })
    }

    render() {
        return (
            <div>
                <Navbar />

                <Search />


            </div>
        )
    }
}

export default HomePage;