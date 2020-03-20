import React,{Component} from 'react';
import './App.css';
import GlobalCoronaPollution from './components/GlobalCoronaPollution-components/GlobalCoronaPollution';
import Articel from './components/articel/Articel';
import Home from './components/home/Home'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

class App extends Component {
  state = {
    artical: []
  }
  render(){
    return (

    <BrowserRouter>


    <div className="App">

     <ul>
        <li><Link to="/"> Home</Link></li>
        <li><Link to="/articel"> Articel</Link></li>
        <li><Link to="/globalcoronapollution"> Pollution</Link></li>
      </ul>

    </div>
   
    
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/articel" component={Articel} artical = {this.state.artical}/>
      <Route exact path="/GlobalCoronaPollution" component={GlobalCoronaPollution}/>
    </Switch>
   
    </BrowserRouter>

  );
  }

}

export default App;
