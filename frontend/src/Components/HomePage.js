import React from "react";
import Search from './Search'
import VanContainer from './VanContainer'
import Navbar from './Navbar/Navbar';
import Login from './LoginForm/Login';

class HomePage extends React.Component {

    state = {
        vans: [],
        searchTerms: {
            location: '',
        }
    }

    componentDidMount() {
        fetch('http://localhost:3001/api/v1/vans')
            .then(r => r.json())
            .then(vans => this.setState({vans}))
    }


    handleSearch = (e) => {
        // console.log(e.target.value)
        this.setState({
            searchTerms: {
                location: e.target.value
            }
        })
    }


    render() {
        // let vans = this.state.vans.filter(van => van.location.includes(this.state.searchTerms.location))
        return (
            <div>
                <Navbar />

                <Search  search ={this.handleSearch} />
                <VanContainer vans={this.state.vans} />
            </div>
    )
    }
}

export default HomePage;