import React, { Component } from 'react'
import './home.css'
export default class Home extends Component {

    render() {

        return (
            <div class="container-fluid container">
                <h1>Hello HOME</h1>

                <div class="row" >

                    <div class="col-sm-4 " >
                        
                        <div className=' text'>
                                <h4 >Total Cases</h4>
                            <p>
                                {this.props.articalNews.total_cases}</p>
                        </div>
                    </div>

                    <div class="col-sm-4 a" >
                        <div className=' text'>
                        <h4 >Total recovered</h4>
                            <p style={{'color':'green'}}>
                                {this.props.articalNews.total_recovered}</p>
                        </div>
                    </div>
                    <div class="col-sm-4" >
                        <div className=' text'>
                        <h4 >Total deaths</h4>

                            <p>{this.props.articalNews.total_deaths}</p>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
