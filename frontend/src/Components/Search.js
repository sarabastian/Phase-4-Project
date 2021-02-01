import React from "react";
// import { Form, Button, Col } from "react-bootstrap";
import VanContainer from './VanContainer'
import Jumbotron from 'react-bootstrap/Jumbotron'
import About from './About';


class Search extends React.Component {

    state = {
        vans: [],
        location: '',
        departure: '',
        return: '',
        showComponent: false
    }

    componentDidMount() {
        fetch('http://localhost:3001/api/v1/vans')
            .then(r => r.json())
            .then(vans => this.setState({ vans }))
    }
    handleSearch = (e) => {
        this.setState({
         
                location: e.target.value
            
        })
    }
    setStartDate = (e) => {

       
        this.setState({
            departure: e.target.value
        })
    }

    setReturnDate = (e) => {
        this.setState({
            return: e.target.value
        })
    }

    

    onButtonClick = (e) => {
        e.preventDefault()
        this.setState({
            showComponent: true
        })
    }

    render() {
        let vans = this.state.vans.filter(van => van.location.toLowerCase()===this.state.location.toLowerCase())

        // console.log(vans)
        // let vans = this.state.vans
        // if (vans.length > 0){
        //     vans.filter(van => van.location.toLowerCase()===this.state.location.toLowerCase())
        // }
   

        return (
            <div>
<Jumbotron className="jumbo-1"> 
  

            <div className="bootstrap-iso">
            <h3>Find your Van Rental</h3>
                <div className="container-fluid">
                    
                    
                        <div className="col-md-6 col-sm-6 col-xs-12">
                            <form method="get" >
                                <div className="form-group">
                                    <label className="control-label requiredField" htmlFor="select">
                                        Select a Location
                                    <span className="asteriskField">
                                            *
                                    </span>
                                    </label>
                                    <select className="select form-control" id="select" name="select" onChange={(e) => this.handleSearch(e)} >
                                        <option defaultValue="selected" >
                                        </option>
                                        <option value="Austin">
                                            Austin
                                        </option>
                                        <option value="Denver">
                                            Denver
                                        </option>
                                        <option value="San Francisco">
                                            San Francisco
                                        </option>
                                    </select>
                                </div>
                                <div className="form-group ">
                                    <label className="control-label" htmlFor="date">
                                        Departure Date
                                    </label>
                                    
                                    <div className="input-group">
                                        <div className="input-group-addon">
                                            <i className="fa fa-calendar">
                                            </i>
                                        </div>
                                        <input className="form-control" id="date" name="date" placeholder="MM/DD/YYYY" type="text" 
                                                 onChange={(e) => this.setStartDate(e)}/>
                                    </div>
                                </div>
                                <div className="form-group ">
                                    <label className="control-label " htmlFor="date1">
                                        Return Date
                                    </label>
                                    <div className="input-group">
                                        <div className="input-group-addon">
                                            <i className="fa fa-calendar">
                                            </i>
                                        </div>
                                        <input  onChange={(e) => this.setReturnDate(e)}className="form-control" id="date1" name="date1" placeholder="MM/DD/YYYY" type="text" />
                                    </div>
                                </div>
                                <div className="form-group" >
                                    <div>
                                        <button className="btn btn-custom " name="submit" type="submit" onClick={(e) => this.onButtonClick(e)}  >
                                            Search 
                                        </button>
                                    </div>
                                </div>
                            </form>
                            
                        </div>
                    
                    
                </div>
               <div>
               
                </div>
            </div>
       
            </Jumbotron> 
           
             {this.state.showComponent ? <VanContainer vans={vans} departure={this.state.departure}
                                                       return={this.state.return}/> : <About /> } 
            

</div>
          

        );
    }
};

export default Search;