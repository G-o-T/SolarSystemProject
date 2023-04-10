import { NewChart } from "./Chart.js";
import { planetsId } from "../data.js";
import { url } from "./Fetch.js";
import { Comet } from "./Comet.js";

export class ChartFetch {
    constructor(option) {
        this.option = option;
    }
    
    getCharingInfo() {
        let сomparableDataObj = {};

        for (let i = 0; i < planetsId.length; i++) {
            
            fetch(`${url}${planetsId[i]}`)
                .then(response => response.json())
                .then(json => {
                    сomparableDataObj[planetsId[i]] = json[this.option];
                })
    }
        
                setTimeout(() => {

                    function arrange() {
                        const comparableData = []; 
                        for (let i = 0; i < planetsId.length; i++) {
                            comparableData[i] = сomparableDataObj[planetsId[i]]
                        }
                        return comparableData;
                    }

                    const comet = new Comet('.statistics__img-comet');
                    comet.hide();
                    
                        const comparisonСhart = new NewChart(arrange(), this.option);
                        // if (comparisonСhart) {
                        //     comparisonСhart.destroy();
                        // }
                        comparisonСhart.createChart();
                    
                  }, 1000);
   
}

}