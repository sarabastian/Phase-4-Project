import React from "react";
import './App.css';
// import { Route, BrowserRouter } from "react-browser-router";
import HomePage from './components/HomePage'
import 'bootstrap/dist/css/bootstrap.min.css';
// import VanContainer from './components/VanContainer'

class App extends React.Component {
  render () {

  
  return (
    <div className="App">
      <HomePage />

      {/* <BrowserRouter>
      <Route exact path="/vans" component={VanContainer} />
      </BrowserRouter> */}

    </div>

    );
  }
}
export default App;
