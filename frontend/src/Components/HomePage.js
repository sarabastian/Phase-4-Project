import React from "react";
import Search from './Search'
// import VanContainer from './VanContainer'
import Navbar from './Navbar/Navbar';
import Login from './LoginForm/Login';
import About from './About';

class HomePage extends React.Component {

  
   

    render() {
        return (
            <div>
                <Navbar />

                <Search  />
                <About />
                
            </div>
        )
    }
}

export default HomePage;