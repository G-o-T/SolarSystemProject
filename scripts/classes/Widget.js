export let planetNames = [];

export class Widget {
    widget = null;
    
    constructor(imgNum, title) {
        this.imgNum = imgNum;
        this.title = title;
    }

    createWidget() {
        planetNames[this.imgNum] = this.title;
        const widgetsWrapper = document.querySelector('.widgets__items');
        this.widget = document.createElement('li');
        this.widget.classList = 'widgets__item';
        this.widget.style.order = this.imgNum;
        const widgetImg = document.createElement('img');
        widgetImg.classList = 'widgets__img';
        widgetImg.alt = `Planet ${this.title}`;
        widgetImg.src = `./assets/images/planets_small/Frame${this.imgNum}.png`;
        const widgetText = document.createElement('h6');
        widgetText.classList = 'widgets__text';
        widgetText.innerHTML = this.title;
        widgetsWrapper.appendChild(this.widget);
        this.widget.append(widgetImg);
        this.widget.append(widgetText);
    }

    onClick(showPlanetInfo) {
        this.widget.addEventListener("click", showPlanetInfo);
    }
}


