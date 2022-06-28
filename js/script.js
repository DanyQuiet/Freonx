// navigation
let burger = document.querySelector('.header__burger');
let intromenu = document.querySelector('.intro__menu');
let menufooter = document.querySelector('.intro__menu-footer');

burger.addEventListener('click', openBurgertest);

function openBurgertest() {

    intromenu.classList.toggle("intromenu__active");
    menufooter.classList.toggle("menufooter__active")

}



const swiper = new Swiper('.swiper', {

    direction: 'horizontal',
    loop: true,
    observerParents: true,
    spaceBetween: 30,
    slidesPerView: 3,
    loopedSlides: 3,
    slidesPerGroup: 1,
    // calculateHeight: true,
    autoHeight: true,
    autoplay: {
        delay: 2000,
    },
    breakpoints: {
        1000: {
            slidesPerView: 3,
        },

        700: {
            slidesPerView: 2,
        },

        320: {
            slidesPerView: 1,
        },
        0: {
            slidesPerView: 1,
        },
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },


});

// closemodal
let formModal = document.querySelector('.form__btn');
let formbtn = document.querySelector('#openModal');
let form = document.querySelector('.form');
let body = document.querySelector('.body');


formModal.addEventListener('click', closeModal = () => {
    form.classList.remove('show');

})

formbtn.addEventListener('click', openModal = () => {
    form.classList.add('show')

})