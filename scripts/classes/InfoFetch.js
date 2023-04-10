import { Fetch } from "./Fetch.js";
import { PlanetInfoBlock } from "./PlanetInfoBlock.js";
import { dataNames } from "../data.js";

export class InfoFetch extends Fetch {

    getPlanetInfo() {
        fetch(this.url)
        .then(response => response.json())
        .then(json => {
            let data = [];
            const prompt = 'API is not perfect, this data is not here'; 
            dataNames.forEach(el => {
                data.push(json[el] ? json[el] : prompt);
            })
            const planetInfo = new PlanetInfoBlock(data);
            planetInfo.createTag();
        })
    }
}