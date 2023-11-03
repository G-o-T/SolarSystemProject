export class OptionsSingleton {
    _instance = null;
    _optionsStore = {
        gravity: 'Surface gravity',
        meanRadius: 'Average radius in kilometers',
        avgTemp: 'Average temperature in °K',
        sideralOrbit: 'Orbital period in earth days',
    }; 

    constructor() {
        if (!this._instance) {
            this._instance = this;
        }
        return this._instance;
    }

    getOption(key) {
        return this._optionsStore[key];
    }
}