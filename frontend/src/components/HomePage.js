import React from "react";
import Search from './Search'

class HomePage extends React.Component {

state = {
vans: [],
 searchTerms: {
     location: '',
     group_size: null,
     departure: '',
     return: ''
 }
}
componentDidMount(){
    fetch('http://localhost:3001/api/v1/vans')
    .then(r => r.json())
    .then(vans => console.log(vans))
}


handleSearch = (e) => {
    // console.log(e.target.value)
    this.setState({
      searchTerms: {
        location: e.target.value,
        group_size: e.target.value,
        departure: e.target.value,
        return: e.target.value
      }
    })
  }


render() {
    return(

         <Search  search={this.handleSearch} />
    )
}
}

export default HomePage;