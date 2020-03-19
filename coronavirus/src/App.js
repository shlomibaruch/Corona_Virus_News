import React,{Component} from 'react';
import axios from 'axios'
import './App.css';
<<<<<<< HEAD
// import Articel from './components/articel/Articel'
import  GlobalCoronaPollution from './GlobalCoronaPollution-components/GlobalCoronaPollution';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
=======
import Articel from './components/articel/Articel'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

>>>>>>> dfc9cd4b1844dd55a803d3b3b5fe7d1dc44fb833

class App extends Component {

  render(){
    return (
    <BrowserRouter>
    <div className="App">
<<<<<<< HEAD
   

    </div>
    {/* < Switch>
        <Route exact path='/articel' render={()=><Articel>} />
       
      </Switch> */}
  
     <GlobalCoronaPollution />
=======
      <ul>
        <li><Link to="/articel"> Articel</Link></li>
        {/* <li><Link to="/globalcoronapollution"> Pollution</Link></li> */}
      </ul>

    </div>
    <Switch>
      <Route exact path="/articel" component={Articel}/>
      {/* <Route exact path="/globalcoronapollution" component={globalcoronapollution}/> */}
    </Switch>
   
>>>>>>> dfc9cd4b1844dd55a803d3b3b5fe7d1dc44fb833
    </BrowserRouter>

  );
  }

}

export default App;
