import React, { Component } from 'react'
import './home.css'
import Solution from '../solution/Solution';
import Carusel from '../carusel/carusel';

export default class Home extends Component {

    render() {
        let NEWS = this.props.articalIsraelNews.map((news, i) => {

            return <div class="carousel-item" id='carousel-item'>
                <div className='carouselContainer'>
    
                <img class="d-block " src={news.urlToImage} alt="First slide" />
                    <h3 style={{'textAlign': 'center'}}>{news.title}</h3>
    
                </div>
            </div>
    
        })
    
       return (<div className='HomeContainer'>
        <div class="container-fluid container">
            <div class="row" >
                <div class="col-sm-4 " >

                    <div className=' text'>
                        <h4 >Total Cases</h4>
                        <p>
                            {this.props.articalTotalCases.total_cases}</p>
                    </div>
                </div>

                <div class="col-sm-4 a" >
                    <div className=' text'>
                        <h4 >Total recovered</h4>
                        <p style={{ 'color': 'green' }}>
                            {this.props.articalTotalCases.total_recovered}</p>
                    </div>
                </div>
                <div class="col-sm-4" >
                    <div className=' text'>
                        <h4 >Total deaths</h4>

                        <p>{this.props.articalTotalCases.total_deaths}</p>
                    </div>
                </div>

            </div>
        </div>
        <Solution/>
        <div className='newsContainer'>

               <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <span class="carousel-item active carouselContainer">
                </span>
                {NEWS}
        
            </div>
        </div>
        </div>
     
    </div>

    ) 
    }
    
}
