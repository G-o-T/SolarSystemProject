export class PlanetInfoBlock {
    constructor(data){
        this.data = data;
    }

    createTag() {
        const planetInfoWrapper = document.querySelector('.planet-info');
        function setSize(radius) {
            let size;
            if (radius < 2500) {
                size = '35%';
            } else if (radius < 7000) {
                size = '35%';
            } else if (radius < 26000) {
                size = '50%';
            } else {
                size = '65%';
            }
            return size;
        }

        planetInfoWrapper.innerHTML = `
        <div class="planet-info__row">
        <div class="planet-info__title">${this.data[0]}</div>
        <div class="planet-info__img">
            <img src="./assets/images/planets_large/${this.data[0].toLowerCase()}.png" alt="Planet ${this.data[0]}" class="planet-info__pic" width="${setSize(this.data[6])}">
        </div>
    </div>
    <div class="planet-info__tables">
        <div class="planet-info__table">
            <div class="planet-info__table-title">History</div>
            <div class="planet-info__data">
                <div class="planet-info__data-row">
                    <div class="planet-info__data-title">discovered by</div>
                    <div class="planet-info__data-desc">${this.data[1]}</div>
                </div>
                <div class="planet-info__data-row">
                    <div class="planet-info__data-title">discovery date</div>
                    <div class="planet-info__data-desc">${this.data[2]}</div>
                </div>
            </div>
        </div>
        <div class="planet-info__table">
            <div class="planet-info__table-title">Physical characteristics</div>
            <div class="planet-info__data">
                <div class="planet-info__data-row">
                    <div class="planet-info__data-title">object type</div>
                    <div class="planet-info__data-desc">${this.data[3].toLowerCase()}</div>
                </div>
                <div class="planet-info__data-row">
                    <div class="planet-info__data-title">mass</div>
                    <div class="planet-info__data-desc">${this.data[4].massValue} x 10<sup>${this.data[4].massExponent}</sup> kg</div>
                </div>
                <div class="planet-info__data-row">
                    <div class="planet-info__data-title">surface gravity</div>
                    <div class="planet-info__data-desc">${this.data[5]} m.s<sup>2</sup></div>
                </div>
                <div class="planet-info__data-row">
                    <div class="planet-info__data-title">average radius</div>
                    <div class="planet-info__data-desc">${this.data[6]} kilometers</div>
                </div> 
                 <div class="planet-info__data-row">
                    <div class="planet-info__data-title">average temperature</div>
                    <div class="planet-info__data-desc">${this.data[7]-273} °C</div>
                </div> 
            </div>
        </div>
        <div class="planet-info__table">
            <div class="planet-info__table-title">Orbital parameters</div>
            <div class="planet-info__data">
                <div class="planet-info__data-row">
                    <div class="planet-info__data-title">orbital period</div>
                    <div class="planet-info__data-desc">${this.data[8]} earth days</div>
                </div>
                <div class="planet-info__data-row">
                    <div class="planet-info__data-title">rotating time on its own axis</div>
                    <div class="planet-info__data-desc">${(this.data[9] > 0 ? this.data[9] : -this.data[9])} earth hours</div>
                </div>
            </div>
        </div>
    </div>`
    }
}