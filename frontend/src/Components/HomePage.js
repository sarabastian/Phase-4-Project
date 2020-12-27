import React from "react";
import Search from './Search'
// import VanContainer from './VanContainer'
import Navbar from './Navbar/Navbar';
import Login from './LoginForm/Login';

class HomePage extends React.Component {

  
   

    render() {
        return (
            <div>
                <Navbar />

                <Search  />
                
            </div>
        )
    }
}

export default HomePage;