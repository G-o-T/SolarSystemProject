import { Fetch } from "./Fetch.js";
import { InfoFetch } from "./InfoFetch.js";
import { Widget } from "./Widget.js";
import { planetsId } from "../data.js";

export class WidgetFetch extends Fetch {

    getEnglishName(imgNum) {
        fetch(this.url)
        .then(response => response.json())
        .then(json => {
                const widgetItem = new Widget(imgNum, json.englishName);
                widgetItem.createWidget();

                function showInfo(num) {
                    let id = planetsId[num];
                    let planet = new InfoFetch(id);
                    planet.getPlanetInfo();
                }

                widgetItem.onClick(showInfo.bind(null, imgNum));
        });
    }
}

