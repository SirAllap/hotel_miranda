

const icon_burger = document.querySelector('.header__mobile-burger-icon')
const icon_close = document.querySelector('.header__mobile-close-icon')
const drop_down = document.querySelector('.mobile__menu-list')

document.addEventListener('click', (event) => {
    if (event.target.matches('.header__mobile-burger-icon')) {
        icon_burger.classList.add('hide')
        icon_close.classList.add('show')
        drop_down.classList.add('show')
    }
    if (event.target.matches('.header__mobile-close-icon')) {
        icon_close.classList.remove('show')
        icon_burger.classList.remove('hide')
        drop_down.classList.remove('show')
    }
})


let isItDesktop = false
window.onresize = function () {
    if (window.innerWidth >= 1000) {
        isItDesktop = true
    } else { isItDesktop = false, document.querySelector('.header').style.marginTop = '0px' }
}

let verticalSize = window.pageYOffset
window.onscroll = function () {
    let currentScrollPos = window.pageYOffset
    if (isItDesktop) {
        document.querySelector('.header').style.marginTop = '40px'
        if (verticalSize < currentScrollPos) {
            document.querySelector('.header').style.marginTop = '-150px'
        }
        verticalSize = currentScrollPos
    }
}


const swiperRooms = new Swiper('.swiper-rooms', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
})
const swiperFeatures = new Swiper('.swiper-features', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    spaceBetween: 40,
    // Pagination dots
    pagination: {
        el: ".swiper-pagination",
    },
})
const swiperFoodMenu = new Swiper('.swiper-food-menu', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    spaceBetween: 40,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})
const swiperRestaurantPhotos = new Swiper('.swiper-restaurant-photos', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    // Pagination dots
    pagination: {
        el: ".swiper-pagination",
    },
})
const swiperFunFact = new Swiper('.swiper-fun-fact', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    // Pagination dots
    pagination: {
        el: ".swiper-pagination-fun",
    },
})
const swiperRoomsCards = new Swiper('.swiper-rooms-cards', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    // Pagination dots
    pagination: {
        el: ".swiper-pagination-rooms-cards",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>"
        },
    },
    navigation: {
        nextEl: '.swiper-button-next-rooms-cards',
        prevEl: '.swiper-button-prev-rooms-cards',
    },
})
const swiperDetailsCards = new Swiper('.swiper-details-cards', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    // Pagination dots

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})