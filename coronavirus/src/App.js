import React,{Component} from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends Component {

  render(){
      return (
        <BrowserRouter>
    <div className="App">
      <h1>
        Hello App
      </h1>
      <h2>coronavirus</h2>
      <h1>coronavirus 2</h1>
    </div>
    </BrowserRouter>
  );
  }

}

export default App;
