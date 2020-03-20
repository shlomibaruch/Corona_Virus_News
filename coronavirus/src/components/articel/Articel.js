import React, { Component } from 'react'
import axios from 'axios';
import './articel.css';
import Carusel from '../carusel/carusel'

export default class Articel extends Component {

    state = {
        articel: [],
        inputsearch: '',
        loading: true
    }
    componentDidMount() {
        
        axios.get('http://newsapi.org/v2/everything?q=coronavirus&from=2020-02-20&sortBy=publishedAt&apiKey=17d57b58c3df4dd48364cbc30503849b')
            .then(res => {
                // console.log(res.data.articles);
                this.setState({ articel: res.data.articles, loading:false })
                this.props.artical(res.data.articles)

                
            })
    }

    serach = (inputsearch) => {
        axios.get(`http://newsapi.org/v2/everything?q=${inputsearch}&from=2020-02-20&sortBy=publishedAt&apiKey=17d57b58c3df4dd48364cbc30503849b`)
            .then(res => {
                // console.log(res.data.articles);
                this.setState({ articel: res.data.articles })

                
            })
    }


    render() {
        
        let NEWS = this.state.articel.map((item, index) => {
            // console.log('.articel.map',item.urlToImage);
            
            return <div key={index} className='CardarticelContainer'>
                <img src={item.urlToImage === null ? 'https://cdn.pixabay.com/photo/2020/03/15/17/22/mask-4934337__340.jpg' : item.urlToImage} alt='coronavirusPic' />
                <div className='title'>
                    <span>{item.title}</span>
                </div>
                <p style={{ 'width': '50%', 'borderTop': '1px solid black' }}></p>
                <span>
                    {item.description + " " } <a href={item.url} target='_blank' >Read More</a>
                </span>
            </div>
        })


        return (
            <div>
                <div className='searchInput'>
                    <input type="text" onChange={(e) => {this.setState({inputsearch: e.target.value}) }} />
                    <button onClick={() => { this.serach(this.state.inputsearch) }}>Search</button>
                </div>

                <div className='contaier'>
                    {this.state.loading ? <Carusel/> : NEWS}
                </div>
                {/* <h1>Hello Articel </h1> */}


            </div>
        )
    }
}
