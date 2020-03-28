import React, { Component } from 'react'
import axios from 'axios';
import './articel.css';

export default class Articel extends Component {

    state = {
        articel: [],
        inputsearch: '',
        loading: false
    }
    // search function : get the value from the search input and Sending the request from the beginning ;

    serach = (inputsearch) => {
        axios.get(`https://newsapi.org/v2/everything?q=${inputsearch}&from=2020-02-26&sortBy=publishedAt&apiKey=17d57b58c3df4dd48364cbc30503849b`)
            .then(res => { this.setState({ articel: res.data.articles }) });
    };


    render() {

        let NEWS = this.props.articals.map((item, index) => {

            return <div key={index} className='CardarticelContainer '>
                <img src={item.urlToImage === null ? 'https://cdn.pixabay.com/photo/2020/03/15/17/22/mask-4934337__340.jpg' : item.urlToImage} alt='coronavirusPic' />
                <div className='title'>
                    <span>{item.title}</span><br />

                </div>
                <p style={{ 'width': '50%', 'borderTop': '1px solid black' }}>
                    <span >
                        <a href={item.url}  >Read More</a>
                    </span>
                </p>
            </div>
        });

        let NEWSearch = this.state.articel.map((item, index) => {

            return <div key={index} className='CardarticelContainer '>
                <img src={item.urlToImage === null ? 'https://cdn.pixabay.com/photo/2020/03/15/17/22/mask-4934337__340.jpg' : item.urlToImage} alt='coronavirusPic' />
                <div className='title'>
                    <span>{item.title}</span><br />

                </div>
                <p style={{ 'width': '50%', 'borderTop': '1px solid black' }}>
                    <span >
                        <a href={item.url} >Read More</a>
                    </span>
                </p>
            </div>
        });

        return (
            <div>
                <div className='searchInput'>
                    <input type="text" onChange={(e) => { this.setState({ inputsearch: e.target.value }) }} placeholder="Search Articel..." />

                    <button className="articleButton" onClick={(e) => {

                        if (this.state.searchInput === "" || !isNaN(this.state.searchInput)) {
                            e.preventDefault()

                        } else {
                            this.setState({ loading: false });
                            this.serach(this.state.inputsearch);
                        }

                    }} type="submit"><i className="fa fa-search"></i></button>
                </div>

                <div className='contaier'>
                    {this.state.loading ? NEWS : NEWSearch}
                </div>
            </div>
        );
    };

    componentDidMount() {
        // togget to render the component befor the search input ( trannery valid to display the browser );
        this.setState({ loading: true });
    };
}
;