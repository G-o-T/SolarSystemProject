import { NewChart } from "./Chart.js";
import { planetsId } from "../data.js";
import { url } from "./Fetch.js";
import { Comet } from "./Comet.js";

// const tests = ['mercure', 'venus', 'terre'];

export class ChartFetch {
    constructor(option) {
        this.option = option;
    }
    
//     getCharingInfo() {
//         let сomparableDataObj = {};

//         for (let i = 0; i < planetsId.length; i++) {
            
//             fetch(`${url}${planetsId[i]}`)
//                 .then(response => response.json())
//                 .then(json => {
//                     сomparableDataObj[planetsId[i]] = json[this.option];
//                 })
//     }
        
//                 setTimeout(() => {

//                     function arrange() {
//                         const comparableData = []; 
//                         for (let i = 0; i < planetsId.length; i++) {
//                             comparableData[i] = сomparableDataObj[planetsId[i]]
//                         }
//                         return comparableData;
//                     }

//                     const comet = new Comet('.statistics__img-comet');
//                     comet.hide();
                    
//                         const comparisonСhart = new NewChart(arrange(), this.option);
//                         comparisonСhart.createChart();
                    
//                   }, 1000);
   
// }

    async getChartingInfo() {

            async function loadPlanetInfo(id) {
                return fetch(`${url}${id}`)
                .then(response => response.json())
            }

            const comparableData = await Promise.all(planetsId.map(planetId => loadPlanetInfo(planetId).then(json => json[this.option])));
            const comet = new Comet('.statistics__img-comet');

            const comparisonСhart = new NewChart(comparableData, this.option);
            comparisonСhart.createChart();

            setTimeout(() => comet.hide(), 1000)
            
        }
    

}

