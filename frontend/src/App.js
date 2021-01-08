import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import OrderForm from './components/OrderForm';
import Login from './components/LoginForm/Login'
import Logout from './components/Logout'
import UpcomingReservations from './components/UpcomingReservations';
import SavedVansContainer from './components/SavedVansContainer';
import MyReservationsContainer from './components/MyReservationsContainer'

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
            <Route path="/logout" component={Logout} />
            <Route path="/upcoming-reservations" component={UpcomingReservations} />
            <Route path="/my-vans" component={SavedVansContainer} />
            <Route path="/my-reservations" component={MyReservationsContainer} />




          </Switch>
       </Router>
            
       
          
      </div>

    );
  }
}
export default App;
