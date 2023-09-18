

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
    // Pagination dots
    pagination: {
        el: ".swiper-pagination",
    },
})
const swiperFoodMenu = new Swiper('.swiper-food-menu', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
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