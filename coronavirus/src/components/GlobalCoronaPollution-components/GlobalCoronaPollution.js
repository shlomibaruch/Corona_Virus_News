import React, { Component } from 'react'
import axios from 'axios';
import Carusel from '../carusel/carusel';
export class GlobalCoronaPollution extends Component {

    state ={
        total_cases: "",
        total_deaths: "",
        total_recovered: "",
        new_cases: "",
        new_deaths: "",
        loading:true
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
                    // statistic_taken_at: statistic_taken_at
                });
                
                
            });
    }




    render() {
            
          return ( 
              
              this.state.loading ? <Carusel/> : <div>
                <div>{this.state.total_cases}</div>
                <table className="global-corona-pollution">
                    <thead>
                        <tr>
                            <th>total cases</th>
                            <th>total deaths</th>
                            <th>total recovered</th>
                            <th>new cases</th>
                            <th>new deaths</th>
                            <th>statistic taken at</th>
                        </tr>
                    </thead>
                </table>

            </div>
        )
    }
}

export default GlobalCoronaPollution;
