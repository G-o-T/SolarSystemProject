export class MenuItem {
    menu = document.querySelector('.header__menu_nav');

    constructor(param) {
        this.menuItem = document.querySelector(param);
    }

    goTo() {
        const goToBlockValue = this.menuItem.getBoundingClientRect().top;

        if (this.menu.classList.contains('active')) {
            this.menu.classList.remove('active');
        }

        window.scrollTo({
            top: goToBlockValue,
            behavior: "smooth"
        });
    }
}