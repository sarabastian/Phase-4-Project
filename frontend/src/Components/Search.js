import React from "react";
// import { Form, Button, Col } from "react-bootstrap";
import VanContainer from './VanContainer'

class Search extends React.Component {





    handleSearch = (e) => {
        this.setState({
            searchTerms: {
                location: e.target.value
            }
        })
    }


    render() {
        // let vans = this.state.vans.filter(van => van.location.includes(this.state.searchTerms.location))

        return (


            <div className="bootstrap-iso">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-2 col-sm-2 col-xs-12">
                            <form method="get">
                                <div className="form-group">
                                    <label className="control-label requiredField" for="select">
                                        Select a Location
                                    <span className="asteriskField">
                                            *
                                    </span>
                                    </label>
                                    <select className="select form-control" id="select" name="select" >
                                        <option selected="selected" value="" onChange={(e) => this.handleSearch(e)}>
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
                                    <label className="control-label " for="date">
                                        Departure Date
                                    </label>
                                    <div className="input-group">
                                        <div className="input-group-addon">
                                            <i className="fa fa-calendar">
                                            </i>
                                        </div>
                                        <input className="form-control" id="date" name="date" placeholder="MM/DD/YYYY" type="text" />
                                    </div>
                                </div>
                                <div className="form-group ">
                                    <label className="control-label " for="date1">
                                        Return Date
                                    </label>
                                    <div className="input-group">
                                        <div className="input-group-addon">
                                            <i className="fa fa-calendar">
                                            </i>
                                        </div>
                                        <input className="form-control" id="date1" name="date1" placeholder="MM/DD/YYYY" type="text" />
                                    </div>
                                </div>
                                <div className="form-group" >
                                    <div>
                                        <button className="btn btn-custom " name="submit" type="submit" >
                                            Search
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
};

export default Search;