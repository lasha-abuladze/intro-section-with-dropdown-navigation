`use strict`;


const menuBtn = document.querySelector(`.btn-menu`);
const closeBtn = document.querySelector(`.close-navigation`);

const navigation = document.querySelector(`.navigation`);
const darkBackground = document.querySelector(`.dark-background`);

const dropdownLi = Array.from(document.querySelectorAll(`.a-arrows`))







menuBtn.addEventListener(`click`, () => {
    navigation.classList.add(`showNavigation`);
    navigation.classList.remove(`hideNavigation`);

    darkBackground.classList.remove(`display-none`);
});

closeBtn.addEventListener(`click`, () => {
    navigation.classList.add(`hideNavigation`);
    navigation.classList.remove(`showNavigation`);

    darkBackground.classList.add(`display-none`);



    /// close opened dropdown after clicking on CLOSE NAV button

    const dropdownUl = Array.from(document.querySelectorAll(`.dropdown-nav`));
    dropdownUl.forEach(el => el.classList.add(`display-none`));


    const arrowsUp = Array.from(document.querySelectorAll(`.arrow-up`));
    const arrowDown = Array.from(document.querySelectorAll(`.arrow-down`));


    arrowDown.forEach(el => el.classList.remove(`display-none`));
    arrowsUp.forEach(el => el.classList.add(`display-none`));
    

});



dropdownLi.forEach((el, i) => {
    el.addEventListener(`click`, () => {
        const dropdownUl = Array.from(document.querySelectorAll(`.dropdown-nav`))
        
        const arrowup = el.querySelector(`.arrow-up`);
        const arrowDown = el.querySelector(`.arrow-down`);


        dropdownUl[i].classList.toggle(`display-none`);
        arrowup.classList.toggle(`display-none`);
        arrowDown.classList.toggle(`display-none`);
    });
});