import { Planet } from "./Planet.js";

export class ParadeOfPlanets {

    constructor(data) {
        this.data = data;
    }

    createParade() {

        for (let i = 0; i < this.data.length; i++) {
            const planet = new Planet(this.data[i], i);
            planet.createPlanet();
        }
    }
}