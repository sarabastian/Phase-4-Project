import React from "react";
import Search from './Search'
import VanContainer from './VanContainer'
import Navbar from './Navbar/Navbar';
import Login from './LoginForm/Login';

class HomePage extends React.Component {

state = {
    searchTerms: {
        location: '',
    },
    vans: []
}

    componentDidMount() {
        fetch('http://localhost:3001/api/v1/vans')
            .then(r => r.json())
            .then(vans => this.setState({ vans }))
    }


    render() {
        return (
            <div>
                <Navbar/>
                <Login/>
                <Search />
                <VanContainer vans={this.state.vans} />
            </div>
    )
    }
}

export default HomePage;