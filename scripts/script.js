import { WidgetFetch } from "./classes/WidgetFetch.js";
import { planetsId } from "./data.js";
import { Button } from "./classes/Button.js";
import { ChartFetch } from "./classes/ChartFetch.js";
import { Comet } from "./classes/Comet.js";
import { Param } from "./classes/Param.js";
import { Slider } from "./classes/Slider.js";
import { MenuItem } from "./classes/Menu.js";
import { err404 } from "./data.js";
import { speech } from "./data.js";


window.addEventListener("DOMContentLoaded", () => {

        for (let i = 0; i < planetsId.length; i++) {
        let data = new WidgetFetch(planetsId[i]);
        data.getEnglishName(i);
    }

    const param = new Param('.statistics__input');
    param.fillOptions();

    function createError(){
        document.querySelector(".statistics__astro-text").innerHTML = err404;
    }

    function hideError(){
        document.querySelector(".statistics__astro-text").innerHTML = speech;
    }

    const compareBtn = new Button('.statistics__btn');
    compareBtn.onClick(       
        (event) => {
            event.preventDefault();

            if(param.getSelectedParam()=== 'default'){
                createError();
            } else {
            const comparison = new ChartFetch(param.getSelectedParam());
            const comet = new Comet('.statistics__img-comet');
            comet.launch();
            comparison.getCharingInfo();
            hideError();
            }
});

    const slider = new Slider(".slider__tape");
    const btnNext = new Button(".slider__control_next");
    btnNext.onClick(() => {
            slider.showNext();
        }
    );

    const btnPrev = new Button(".slider__control_prev");
    btnPrev.onClick(() => {
            slider.showPrev();
        }
    )

    const burgerBtn = new Button(".header__menu_burger");
    burgerBtn.onClick(() => {
        document.body.classList.toggle("lock");
        document.querySelector(".header__menu_nav").classList.toggle("active");
        document.querySelector(".header__menu_burger").classList.toggle("rotate");
        }
    )

    const menuLinks = document.querySelectorAll('.menu__link');
    menuLinks.forEach(el => {
        el.addEventListener("click", () => {
            const menuLink = new MenuItem(el.dataset.goto);
            menuLink.goTo();
        })
    })

})