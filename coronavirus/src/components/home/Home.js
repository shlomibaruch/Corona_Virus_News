import React, { Component } from 'react'
import './home.css'
export default class Home extends Component {

    render() {
        console.log(this.props.articalIsraelNews);

        let NEWS = this.props.articalIsraelNews.map((news, i) => {
            // console.log(news.content);

            //     return <div className='news'>
            //         <div class="card" style={{"width": "15rem"}}>
            //     <img class="card-img-top img" src={news.urlToImage} alt="Card image cap"/>
            //     <div class="card-body">
            //       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            //     </div>
            //   </div>
            //     </div>
            return <div class="carousel-item">
                <div>
                <p className="title">{news.title}</p>
                <img className="carosl-Img" src={news.urlToImage}/>
                </div>
            </div>

        })

        return (<div style={{ 'minHeight': '700px' }}>
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


            <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="..." class="d-block w-100" alt="..." />
                    </div>
                    {NEWS}

                </div>
            </div>

        </div>
        )
    }
}
