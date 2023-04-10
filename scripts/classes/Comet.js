export class Comet {
comet = null;

    constructor(className) {
        this.comet = document.querySelector(className);
    }

    launch() {
        this.comet.classList.add("animation");
    }

    hide() {
        this.comet.classList.remove("animation");
        this.comet.classList.add("inert");
    }
}