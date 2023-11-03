export class Planet {
    planet = null;

    constructor(name, i) {
        this.name = name;
        this.i = i;
    }


    createPlanet() {

        const parade = document.querySelector('.parade');
        const planet = document.createElement('img');
        planet.alt = `Planet ${this.name}`;
        planet.src = `./assets/images/parade/${this.name}.png`;
        planet.classList = `parade__planet parade__planet_${this.name}`;
        parade.append(planet);
    }
}

