import { values } from "../data.js";

export class Param {
    input = null;

    constructor(className) {
        this.input = document.querySelector(className);
    }

    fillOptions() {
        for (let i = 0; i < Object.keys(values).length; i++) {
            let option = document.createElement('option');  
            option.value = Object.keys(values)[i];
            option.innerHTML = Object.values(values)[i];
            option.classList = "statistics__option";
            this.input.appendChild(option);
        }
    }

    getSelectedParam() {
        return document.querySelector(`option[value="${this.input.value}"]`).value;
    }
}


