import React,{Component} from 'react';
import './App.css';
// import Articel from './components/articel/Articel'
import  GlobalCoronaPollution from './components/GlobalCoronaPollution-components/GlobalCoronaPollution';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';


class App extends Component {
  state = {
    artical: []

  }
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
