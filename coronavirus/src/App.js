import React, { Component } from 'react';
import './App.css';
import Articel from './components/articel/Articel';
import GlobalCoronaPollution from './components/GlobalCoronaPollution-components/GlobalCoronaPollution';
import Home from './components/home/Home';
import Footer from './components/Footer-component/Footer';
import Solution from './components/solution/Solution'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Nav from './components/Nav/Nav';


class App extends Component {
  state = {
    articel: [],
    worldCases: '',
    homeArticles: []
  }

 
  render() {

    return (

      <BrowserRouter>
        <Nav />
        <div className="App">


        </div>

        <Switch >
          <Route exact path='/' render={() => <Home
            articalTotalCases={this.state.worldCases}
            articalIsraelNews={this.state.homeArticles.slice(0, 10)}
          />} />
          <Route exact path='/articel' render={() => <Articel articals={this.state.articel} />} />
          <Route exact path='/globalCoronaPollution' render={() => <GlobalCoronaPollution />} />
          <Route exact path='/solution' component={Solution} />
        </Switch >
        <Footer className="footer" />
      </BrowserRouter>

    );
  }

  componentDidMount() {
    axios.get('https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php?country=&rapidapi-key=9a901b3159mshad3ab2580a6127cp115cefjsn5452d8509588')
      .then(res => {
        this.setState({
          worldCases: res.data
        });
      });
    axios.get('https://newsapi.org/v2/everything?q=coronavirus&from=2020-03-20&to=2020-03-20&sortBy=popularity&apiKey=17d57b58c3df4dd48364cbc30503849b')
      .then(res => {
        // console.log(res.data.articles);
        this.setState({
          articel: res.data.articles
        })

      });
    axios.get('https://newsapi.org/v2/top-headlines?sources=google-news-is&apiKey=17d57b58c3df4dd48364cbc30503849b')
      .then(res => {
        this.setState({
          homeArticles: res.data.articles
        })

      });
  }

}

export default App;
