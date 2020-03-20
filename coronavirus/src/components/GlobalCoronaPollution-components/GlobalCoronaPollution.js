import React, { Component } from 'react'
import axios from 'axios';
import Carsuel from '../carusel/carusel';
import './GlobalCoronaPollution.css';

export class GlobalCoronaPollution extends Component {

    state = {
        total_cases: "",
        total_deaths: "",
        total_recovered: "",
        new_cases: "",
        new_deaths: "",
        statistic_taken_at: "",
        loading: false,
        inputSearch: ""
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
                });


            });
    }


    handelSearch = (e) => {
        let input = e.target.value
        return console.log(input);
        ;
        
    }

    render() {
    


        
        return (
            this.state.loading ? <Carsuel /> :
            <div className="global-corona-pollution">
                <div>
                    <form className="form-Search" action="/action_page.php">
                        <input onChange={this.handelSearch} type="text" placeholder="Search.." name="search" />
                        <button type="submit"><i className="fa fa-search"></i></button>
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
            </div>
        )
    }
}

export default GlobalCoronaPollution;
