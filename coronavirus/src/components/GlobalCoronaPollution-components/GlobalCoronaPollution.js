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
        loading: true,
        searchInput: '',
        countryArr: []
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

    search = (input) => {
        axios.get(`https://coronavirus-monitor.p.rapidapi.com/coronavirus/latest_stat_by_country.php?country=${input}&rapidapi-key=9a901b3159mshad3ab2580a6127cp115cefjsn5452d8509588`)
            .then(res => {
                console.log(res.data);
                this.setState({ countryArr: res.data.latest_stat_by_country });
            });

    }



    render() {
        console.log(this.state.countryArr);

        const elements = this.state.countryArr.map((element, index) => {

            return <table key={index} className="table-country-pollution-numbers" >
                <thead>
                    <tr >
                        <td>{element.country_name} </td>
                        <td>{element.total_cases}</td>
                        <td>{element.total_deaths}</td>
                        <td>{element.total_recovered}</td>
                        <td>{element.serious_critical}</td>
                    </tr>
                </thead>
            </table>

          
        });
        return (           
            this.state.loading ? <Carusel /> :
            <div className="global-corona-pollution">
                <h1>Global Corona Pollution</h1>
                <table className="table-global-pollution" >
                    <thead>
                        <tr className="table-global-pollution-head">
                            <th>Total Cases</th>
                            <th>Total Deaths</th>
                            <th>Total Recovered</th>
                            <th>New Cases</th>
                            <th>New Deaths</th>
                        </tr>
                        <tr className="table-global-pollution-head-numbers">
                            <td>{this.state.total_cases}</td>
                            <td>{this.state.total_deaths}</td>
                            <td>{this.state.total_recovered}</td>
                            <td>{this.state.new_cases}</td>
                            <td>{this.state.new_deaths}</td>
                        </tr>
                    </thead>
                </table>


                
                    <div>
                        <form className="form-Search" action="/action_page.php">
                            <input onChange={(e) => { this.setState({ searchInput: e.target.value }) }} type="text" placeholder="Search Country.." name="search" />
                            <button onClick={(e) => {
                                e.preventDefault()
                                this.search(this.state.searchInput)
                            }} type="submit"><i className="fa fa-search"></i></button>

                        </form>


                        <table className="table-country-pollution" >
                            <thead>
                                <tr>
                                    <th>Country Name</th>
                                    <th>Total Cases</th>
                                    <th>Total Deaths</th>
                                    <th>Total Recovered</th>
                                    <th>Serious Ritical</th>
                                </tr>

                            </thead>
                        </table>

                    </div>
                    {elements}
                </div>
        )
    }
}

export default GlobalCoronaPollution;
