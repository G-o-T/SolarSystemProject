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
import { ParadeOfPlanets } from "./classes/ParadeOfPlanets.js";
import { planetsNames } from "./data.js";
import { Dropdown } from "./classes/Dropdown.js";


window.addEventListener("DOMContentLoaded", () => {

    const parade = new ParadeOfPlanets(planetsNames);
    setTimeout(parade.createParade(), 1000);

    for (let i = 0; i < planetsId.length; i++) {
        let data = new WidgetFetch(planetsId[i]);
        data.getEnglishName(i);
    }

    const param = new Param('fake__options-list', 'fake__options-list-item');
    param.fillOptions();
    let selectedParam = 'default';

    const astroSpeech = document.querySelector(".statistics__astro-text");

    function createError(){ 
        astroSpeech.innerHTML = err404;
        astroSpeech.style.color = '#d47580';
    }

    function hideError(){
        astroSpeech.innerHTML = speech;
        astroSpeech.style.color = '#fff';
    }

    
    const dropDownBtn = document.querySelector('.fake__select');
    const dropdown = new Dropdown();
    dropDownBtn.addEventListener('click', (e) => {
        e.preventDefault();
        dropDownBtn.classList.toggle('fake__select_triangle');
        dropDownBtn.classList.toggle('fake__select_rotate-triangle');

        dropdown.toggleDropdownVisibility('.fake__options-list');
    })

    const dropDownList = document.querySelector('.fake__options-list');
    dropDownList.addEventListener('click', e => {
        dropDownBtn.innerHTML = dropdown.getSelectedDropdownItem(e).text;
        selectedParam = dropdown.getSelectedDropdownItem(e).value;
        dropdown.hideDropdown('.fake__options-list');
        dropDownBtn.classList.toggle('fake__select_triangle');
        dropDownBtn.classList.toggle('fake__select_rotate-triangle');
    });

    document.addEventListener('click', e => {
        if (e.target.dataset.dropdown !== 'dropdown') {
            dropdown.hideDropdown('.fake__options-list');
            dropDownBtn.classList.add('fake__select_triangle');
            dropDownBtn.classList.remove('fake__select_rotate-triangle');
        }
    }) 


    const compareBtn = new Button('.statistics__btn');
    compareBtn.onClick(       
        (e) => {
            e.preventDefault();

            if(selectedParam === 'default'){
                createError();
            } else {
            const comparison = new ChartFetch(selectedParam);
            const comet = new Comet('.statistics__img-comet');
            comet.launch();
            comparison.getChartingInfo();
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

