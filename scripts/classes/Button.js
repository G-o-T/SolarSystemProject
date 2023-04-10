export class Button {
    btn = null;
    
    constructor (className){
        this.btn = document.querySelector(className);
    }
    
    onClick(showComparingData) {
        this.btn.addEventListener("click", showComparingData);
    }
}