import React,{Component} from 'react';
import './App.css';
import Articel from './components/articel/Articel'
import  GlobalCoronaPollution from './components/GlobalCoronaPollution-components/GlobalCoronaPollution';
import Home from './components/home/Home'
import Footer from './components/Footer-component/Footer';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';
import Nav from './components/Nav/Nav'


class App extends Component {
  state = {
    articel: [],
    worldCases: ''
  }
  
  articelData = (data) =>{
    this.setState({artical : data})
  }
  render(){
    // console.log('artical from app',this.state.articel);
    
    return (

    <BrowserRouter>
    <Nav/>
      <div className="App">
   
     
    </div>

    <Switch >
           <Route exact path='/' render={() => <Home articalNews = {this.state.worldCases} /> }/>
        <Route exact path='/articel' render={()=> <Articel artical ={ this.articelData } articals ={this.state.articel} />}/>
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
        axios.get('http://newsapi.org/v2/everything?q=coronavirus&from=2020-03-20&to=2020-03-20&sortBy=popularity&apiKey=17d57b58c3df4dd48364cbc30503849b')
        .then(res => {
            // console.log(res.data.articles);
            this.setState({ articel: res.data.articles })
            
        })
}

}

export default App;
