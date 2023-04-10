export class Slider {
    sliderTape = null;
    sliderTapeItems = null;
    position = 0;
    vw = window.innerWidth;
    sliderTapeWidth = 1395;
    step = 156;
    count = 1;
    mult = this.step * this.count;
    
    constructor (className){
        this.sliderTape = document.querySelector(className);
    }
    
    showNext() {
        this.position += this.mult;
        this.position = Math.min(this.position, this.step*(Math.ceil(this.sliderTapeWidth/this.vw)));
        this.sliderTape.style.transform = `translateX(${this.position}px)`;
    }

    showPrev() {
        this.position -= this.mult;
        this.position = Math.max(this.position, -this.step*(Math.ceil(this.sliderTapeWidth/this.vw)));
        this.sliderTape.style.transform = `translateX(${this.position}px)`;
    }
}