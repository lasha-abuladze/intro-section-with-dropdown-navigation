`use strict`;





const menuBtn = document.querySelector(`.btn-menu`);
const closeBtn = document.querySelector(`.close-navigation`)

const navigation = document.querySelector(`.navigation`);







menuBtn.addEventListener(`click`, () => {
    navigation.classList.add(`showNavigation`)
    navigation.classList.remove(`hideNavigation`)
})

closeBtn.addEventListener(`click`, () => {
    navigation.classList.add(`hideNavigation`)
    navigation.classList.remove(`showNavigation`)
})