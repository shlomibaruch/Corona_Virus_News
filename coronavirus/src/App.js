import React,{Component} from 'react';
import axios from 'axios'
import './App.css';
// import Articel from './components/articel/Articel'
import  GlobalCoronaPollution from './GlobalCoronaPollution-components/GlobalCoronaPollution';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';


class App extends Component {

  render(){
    return (
    <BrowserRouter>
    <div className="App">
   

    </div>
    {/* < Switch>
        <Route exact path='/articel' render={()=><Articel>} />
       
      </Switch> */}
  
     <GlobalCoronaPollution />
    </BrowserRouter>

  );
  }

}

export default App;
