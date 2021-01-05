import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import VanShow from './components/VanShow';
import OrderForm from './components/OrderForm';
import Login from './components/LoginForm/Login'


class App extends React.Component {
  render() {


    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/book" component={OrderForm} />
            <Route path="/login" component={Login} />
          </Switch>
       </Router>
            
       
          
      </div>

    );
  }
}
export default App;
