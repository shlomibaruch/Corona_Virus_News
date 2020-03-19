import React,{Component} from 'react';
import './App.css';
// import Articel from './components/articel/Articel'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends Component {

  render(){
    return (
    <BrowserRouter>
    <div className="App">
      <h1>
        Hello App
      </h1>

    </div>
    {/* < Switch>
        <Route exact path='/articel' render={()=><Articel>} />
      </Switch> */}
    </BrowserRouter>

  );
  }

}

export default App;
