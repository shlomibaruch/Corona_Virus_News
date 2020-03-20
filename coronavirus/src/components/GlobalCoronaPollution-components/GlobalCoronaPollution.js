import React, { Component } from 'react'
import axios from 'axios';
import Carusel from '../carusel/carusel'
import './GlobalCoronaPollution.css';

export class GlobalCoronaPollution extends Component {

    state = {
        total_cases: "",
        total_deaths: "",
        total_recovered: "",
        new_cases: "",
        new_deaths: "",
        loading:true,
        searchInput: '',
        caseByContry : []
    } 

    componentDidMount() {
        axios.get('https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php?country=&rapidapi-key=9a901b3159mshad3ab2580a6127cp115cefjsn5452d8509588')
            .then(res => {
                console.log(res.data);
                this.setState({
                    total_cases: res.data.total_cases,
                    total_deaths: res.data.total_deaths,
                    total_recovered: res.data.total_recovered,
                    new_cases: res.data.new_cases,
                    new_deaths: res.data.new_deaths,
                    loading: false
                });


            });
    }

    search = (input) =>{
        axios.get(`https://coronavirus-monitor.p.rapidapi.com/coronavirus/latest_stat_by_country.php?country=${input}&rapidapi-key=9a901b3159mshad3ab2580a6127cp115cefjsn5452d8509588`)
            .then(res => {
                console.log(res.data);
                this.setState({
                    caseByContry: res.data.latest_stat_by_country
                });
                
                
            });

    }

    render() {
        console.log(this.state.countryArr);

        const elements = this.state.countryArr.map((element, index) => {

        console.log(this.state.caseByContry);
        
        return (
            this.state.loading ? <Carusel /> :
            <div className="global-corona-pollution">
                <div>
                    <form className="form-Search" action="/action_page.php">
                        
                        <input onChange={(e) => { this.setState({searchInput: e.target.value}) }} type="text" placeholder="Search.." name="search" />
                        <button  onClick={(e)=> {
                            e.preventDefault()
                            this.search(this.state.searchInput)}}><i className="fa fa-search"></i></button>
                    </form>


                    <table className="table-global-pollution" >
                        <thead>
                            <tr>
                                <th>total cases</th>
                                <th>total deaths</th>
                                <th>total recovered</th>
                                <th>new cases</th>
                                <th>new deaths</th>
                            </tr>
                            <tr>
                                <td>{this.state.total_cases}</td>
                                <td>{this.state.total_deaths}</td>
                                <td>{this.state.total_recovered}</td>
                                <td>{this.state.new_cases}</td>
                                <td>{this.state.new_deaths}</td>
                            </tr>
                        </thead>
                    </table>
                    
                </div>
        )
    }
}

export default GlobalCoronaPollution;
