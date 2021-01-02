import React from "react";
import Search from './Search'
// import VanContainer from './VanContainer'
import Navbar from './Navbar/Navbar';
import Login from './LoginForm/Login';
import About from './About';
import Reviews from './Reviews'

class HomePage extends React.Component {

  
   

    render() {
        return (
            <div>
                <Navbar />

                <Search  />
                <About />
                <Reviews />
                
            </div>
        )
    }
}

export default HomePage;