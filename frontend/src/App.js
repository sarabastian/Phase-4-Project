import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './Components/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import OrderForm from './Components/OrderForm';
import Login from './Components/LoginForm/Login'
import UpcomingReservations from './Components/UpcomingReservations';
import SavedVansContainer from './Components/SavedVansContainer'

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {


    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/book" component={OrderForm} />
            <Route path="/login" component={Login} />
            <Route path="/reservations" component={UpcomingReservations} />
            <Route path="/my-vans" component={SavedVansContainer} />




          </Switch>
       </Router>
            
       
          
      </div>

    );
  }
}
export default App;
