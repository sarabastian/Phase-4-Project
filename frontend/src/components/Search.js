import React from "react";
// import { Form, Button, Col } from "react-bootstrap";

class Search extends React.Component {



    render() {
        {console.log(this.props)}
        return (
           

<div class="bootstrap-iso">
 <div class="container-fluid">
  <div class="row">
   <div class="col-md-2 col-sm-2 col-xs-12">
    <form method="post">
     <div class="form-group ">
      <label class="control-label requiredField" for="select">
       Select a Location
       <span class="asteriskField">
        *
       </span>
      </label>
      <select class="select form-control" id="select" name="select">
       <option selected="selected" value="">
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
     <div class="form-group ">
      <label class="control-label " for="date">
       Departure Date
      </label>
      <div class="input-group">
       <div class="input-group-addon">
        <i class="fa fa-calendar">
        </i>
       </div>
       <input class="form-control" id="date" name="date" placeholder="MM/DD/YYYY" type="text"/>
      </div>
     </div>
     <div class="form-group ">
      <label class="control-label " for="date1">
       Return Date
      </label>
      <div class="input-group">
       <div class="input-group-addon">
        <i class="fa fa-calendar">
        </i>
       </div>
       <input class="form-control" id="date1" name="date1" placeholder="MM/DD/YYYY" type="text"/>
      </div>
     </div>
     <div class="form-group">
      <div>
       <button class="btn btn-custom " name="submit" type="submit">
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