import { values } from "../data.js";

export class Param {
    input = null;

    constructor(classNameList, classNameItem) {
        this.input = document.querySelector(`.${classNameList}`);
        this.clN = classNameItem;
        this.param = document.querySelector(`.${classNameItem}`);
    }

    fillOptions() {
        for (let i = 0; i < Object.keys(values).length; i++) {
            let option = document.createElement('li');  
            option.dataset.value = Object.keys(values)[i];
            option.innerHTML = Object.values(values)[i];
            option.classList = this.clN;
            option.dataset.dropdown = 'dropdown';
            this.input.appendChild(option);
        }
    }

}
