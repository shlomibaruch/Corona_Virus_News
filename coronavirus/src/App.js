import React,{Component} from 'react';
import './App.css';
import Articel from './components/articel/Articel'
import  GlobalCoronaPollution from './components/GlobalCoronaPollution-components/GlobalCoronaPollution';
import Home from './components/home/Home'
import Footer from './components/Footer-component/Footer';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';


class App extends Component {
  state = {
    artical: [],
    worldCases: ''
  }
  
  articelData = (data) =>{
    this.setState({artical : data})
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
           <Route exact path='/' render={() => <Home articalNews = {this.state.worldCases} /> }/>
        <Route exact path='/articel' render={()=> <Articel artical ={ this.articelData } />}/>
        <Route exact path='/globalCoronaPollution' render={()=> <GlobalCoronaPollution  />} />
    </Switch >
     <Footer className="footer" />
    </BrowserRouter>
  
  );
  }
  componentDidMount() {
    axios.get('https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php?country=&rapidapi-key=9a901b3159mshad3ab2580a6127cp115cefjsn5452d8509588')
        .then(res => {
            console.log(res.data);
            this.setState({
              worldCases:res.data
            });


        });
}

}

export default App;
