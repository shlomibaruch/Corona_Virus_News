import React, { Component } from 'react'
import axios from 'axios'
import './articel.css'
export default class Articel extends Component {

    state = {
        articel: [],
        inputsearch: ''
    }
    componentDidMount() {
        axios.get('http://newsapi.org/v2/everything?q=coronavirus&from=2020-02-19&sortBy=publishedAt&apiKey=17d57b58c3df4dd48364cbc30503849b')
            .then(res => {
                console.log(res.data.articles);
                this.setState({ articel: res.data.articles })
            })
    }

    serach = () =>{
        
    }

    render() {
        console.log('this this articel', this.state.articel);


        let NEWS = this.state.articel.map((item, index) => {
            return <div className='CardarticelContainer'>
                <img src={item.urlToImage === null? 'https://cdn.pixabay.com/photo/2020/03/15/17/22/mask-4934337__340.jpg' : item.urlToImage} alt='coronavirusPic'/>
                <div>
                    <span>{item.title}</span>
                </div>
                <p style={{'width':'50%','borderTop':'1px solid black'}}></p>
                <span>
                    {item.description}
                </span>
            </div>
        })


        return (
            <div className='contaier'>
                {/* <h1>Hello Articel </h1> */}
                <input type="text" onChange={(e)=> {this.state.inputsearch = e.target.value}}/>
                {NEWS}
            </div>
        )
    }
}
