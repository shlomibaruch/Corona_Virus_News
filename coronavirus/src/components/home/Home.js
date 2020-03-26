import React, { Component } from 'react'
import './home.css'
import Solution from '../solution/Solution';
// import Carusel from '../carusel/carusel';

export default class Home extends Component {

    render() {
        let NEWS = this.props.articalIsraelNews.map((news, i) => {

            return <div key={i} className="carousel-item" id='carousel-item'>
                <div className='carouselContainer'>

                    <img className="d-block " src={news.urlToImage} alt="First slide" />

                    <h3 style={{ 'textAlign': 'center' }}>{news.title}</h3>
                    <h6 style={{ 'textAlign': 'right' }}>{news.description}</h6>
                </div>
            </div>

        })

        return (<div className='HomeContainer'>

            <div className="container-fluid container">

                <div className="row" >
                    <div className="col-sm-4 " >
                        <div className='text '>
                            <h4 >Total Cases</h4>
                            
                              <p className="total-numbers">  {this.props.articalTotalCases.total_cases}</p>
                        </div>
                    </div>

                    <div className="col-sm-4 " >
                        <div className=' text'>
                            <h4 >Total Recovered</h4>
                            <p className="total-numbers" style={{ 'color': 'rgb(0, 128, 0,0.6)' }}>
                                {this.props.articalTotalCases.total_recovered}</p>
                        </div>
                    </div>
                    <div className="col-sm-4 " >
                        <div className=' text'>
                            <h4 >Total Deaths</h4>
                            <p className="total-numbers">{this.props.articalTotalCases.total_deaths}</p>
                        </div>
                    </div>
                    
                </div>

            </div>

            <div className='newsContainer'>
                <div className='newsTitle'>
                    <h1>What's The News</h1>
                </div>
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <span className="carousel-item active carouselContainer"></span>
                        {NEWS}
                    </div>
                </div>
            </div>

                <div id='stayHomeDiv'></div>

            <div className='solutionContainer'>

                <Solution />
            </div>

        </div>

        )
    }

}
