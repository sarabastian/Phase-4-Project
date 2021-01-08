import React from "react";
// import ReactDOM from 'react-dom';
import Search from './Search'
// import VanContainer from './VanContainer'
import Navbar2 from './Navbar/Navbar2';
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
                <Navbar2 />

                <Search />


            </div>
        )
    }
}

export default HomePage;