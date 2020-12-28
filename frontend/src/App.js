import React from "react";
import './App.css';
import { Route, BrowserRouter, Switch } from "react-router-dom";
import HomePage from './components/HomePage'
import 'bootstrap/dist/css/bootstrap.min.css';
import VanShow from './components/VanShow'

class App extends React.Component {
  render() {


    return (
      <div className="App">
       
        <BrowserRouter>
          <Switch>


            <Route exact path='/' >
            <HomePage />
            </Route>
            <Route exact path="/vans/:id" component={() => <VanShow />} />

          </Switch>
        </BrowserRouter>
      </div>

    );
  }
}
export default App;
