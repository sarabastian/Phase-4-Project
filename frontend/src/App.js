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
  state = {
    isloggedin: false
  }

  componentDidMount(){
    this.handleLogin();
  }

  handleLogin = () => {
    if(localStorage.getItem('token')) {
      this.setState({ isloggedin: true})
    }
  }

  // handleLogout = () => {
  //   if localStorage.
  // }

  render() {

    
  console.log(localStorage)

    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={() => <HomePage login={this.state.isloggedin} handleLogin={this.handleLogin} /> } />
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
