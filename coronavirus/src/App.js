import React,{Component} from 'react';
import axios from 'axios'
import './App.css';
import Articel from './components/articel/Articel'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';


class App extends Component {

  render(){
    return (
    <BrowserRouter>
    <div className="App">
      <ul>
        <li><Link to="/articel"> Articel</Link></li>
        {/* <li><Link to="/globalcoronapollution"> Pollution</Link></li> */}
      </ul>

    </div>
    <Switch>
      <Route exact path="/articel" component={Articel}/>
      {/* <Route exact path="/globalcoronapollution" component={globalcoronapollution}/> */}
    </Switch>
   
    </BrowserRouter>

  );
  }

}

export default App;
