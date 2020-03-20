import React,{Component} from 'react';
import './App.css';
import Articel from './components/articel/Articel'
import  GlobalCoronaPollution from './components/GlobalCoronaPollution-components/GlobalCoronaPollution';
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
      <Link to='/' >Home</Link>
      <Link to='/articel' >Articel</Link>
      <Link to='/globalCoronaPollution' >Pollution</Link>
   

    </div>
    <Switch >
           <Route exact path='/' component={Home}  />
        <Route exact path='/articel' component={Articel} />
        <Route exact path='/globalCoronaPollution' component={GlobalCoronaPollution} />
    </Switch >
    </BrowserRouter>
  
  );
  }

}

export default App;
