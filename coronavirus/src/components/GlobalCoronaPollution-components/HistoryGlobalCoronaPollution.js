import React, { Component } from 'react'


export class HistoryGlobalCoronaPollution extends Component {

    state = {
        history: []
    }


     findDuplicates = (arr) => {
         // You can define the comparing function here. 
        // JS by default uses a crappy string compare.
        // (we use slice to clone the array so the
        // original array won't be modifie)
        let results = [];
        for (let i = 0; i < arr.length - 1; i++) {
          if (arr[i + 1].total_cases !== arr[i].total_cases) {
            results.push(arr[i]);
          }
        }

        return results;
      }
   

    render() {

          
          let a = this.findDuplicates(this.props.historyArr)
          console.log('function',a);
          

     console.log(this.props.historyArr);
        return (
            <div>
                
            </div>
        )
    }
}

export default HistoryGlobalCoronaPollution;
