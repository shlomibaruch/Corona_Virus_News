import React from 'react'
import './GlobalCoronaPollution.css'

export default function HistoryGlobalCoronaPollution(props) {

    let results = [];
    for (let i = 0; i < props.searchData.length - 1; i++) {
        if (props.searchData[i + 1].total_cases !== props.searchData[i].total_cases) {

            let UpdateVirusInfectionData = {
                country_name: props.searchData[i].country_name,
                total_cases: props.searchData[i].total_cases,
                serious_critical: props.searchData[i].serious_critical,
                record_date: props.searchData[i].record_date

            }
            results.push(UpdateVirusInfectionData);
        }
    }
    let showHistoryRecord = results.map((record, index) => {
        return <tr className="HistoryContainerByName" key={index}>
            <td>{record.country_name}</td>
            <td>{record.total_cases}</td>
            <td>{record.serious_critical}</td>
            <td>{record.record_date}</td>
        </tr>
    });
    return ( <div className= { props.flag ? 'HistoryContainer' : 'HistoryContainerNone' }>
        
            <div className='HistoryHeader' >
            <h1 className="history-title" >History Record</h1>
            </div>

            <table className="table table-history ">

                <thead>
                    <tr>
                        <th className='thForMedia' scope="col">conutry</th>
                        <th className='thForMedia' scope="col">total cases</th>
                        <th className='thForMedia' scope="col">serious critical</th>
                        <th className='thForMedia' scope="col">record date</th>
                    </tr>
                </thead>
                
                <tbody>
                    {showHistoryRecord}
                   
                </tbody>

            </table>

        </div> 
    )
}

