//References to main navigation
const ul = document.querySelector('.nav__ul')
const hamburgerButton = document.querySelector('.nav__buttonHamburger')
const exitButton = document.querySelector('.nav__buttonX')

//References to sub navigation
const ulPrograms = document.querySelector('.nav__programUl')
const programsButton = document.querySelector('.nav__ulProgramsLi') //only for the buttons


//Main nav expanding
hamburgerButton.addEventListener('click', () => {
    hamburgerButton.classList.toggle('hamburger--closed')
    ul.classList.toggle('ul--open')
    exitButton.classList.toggle('exit--closed')
})
exitButton.addEventListener('click', () => {
    hamburgerButton.classList.toggle('hamburger--closed')
    ul.classList.toggle('ul--open')
    exitButton.classList.toggle('exit--closed')
})

//Sub nav expanding

programsButton.addEventListener('mouseover', () => {
    ulPrograms.classList.add('programs--open')
})
programsButton.addEventListener('mouseout', () => {
    ulPrograms.classList.remove('programs--open')
})