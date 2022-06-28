let burger = document.querySelector('.header__burger');
let intromenu = document.querySelector('.intro__menu');
let menufooter = document.querySelector('.intro__menu-footer');

burger.addEventListener('click', openBurgertest);

function openBurgertest() {

    intromenu.classList.toggle("intromenu__active");
    menufooter.classList.toggle("menufooter__active")

}