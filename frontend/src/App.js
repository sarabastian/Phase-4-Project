import React from "react";
// import { Route } from "react-router";
import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage'

class App extends React.Component {


    render() {
      return (
        <div className="App">
          <HomePage />
        </div>
      );
    }
}

export default App;
