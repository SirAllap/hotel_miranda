

const icon_burger = document.querySelector('.header__mobile-burger-icon')
const icon_close = document.querySelector('.header__mobile-close-icon')
const drop_down = document.querySelector('.mobile__menu-list')
const header = document.querySelector('.header')

icon_burger.addEventListener('click', () => {
    icon_burger.classList.toggle('hide')
    icon_close.classList.toggle('show')
    drop_down.classList.toggle('show')
})
icon_close.addEventListener('click', () => {
    icon_burger.classList.toggle('hide')
    icon_close.classList.toggle('show')
    drop_down.classList.toggle('show')
})

window.onload = () => {
    window.pageYOffset > 99 ? header.classList.add('header--hide-on-top') :
        header.classList.remove('header--hide-on-top')
    if (window.innerWidth >= 1000) {
        console.log('im a desktop')
        runDesktopView()
        destroyFeaturesSwiper()
    } else {
        console.log('im a small device')
        runDevicesView()
        runFeaturesSwiper()
    }
    if (window.innerWidth >= 720) {
        console.log('im a medium device')
        destroyRestaurantSwiper()
    } else {
        runRestaurantSwiper()
    }
}

window.onresize = () => {
    if (window.innerWidth >= 1200) {
        runDesktopView()
        destroyFeaturesSwiper()
    } else {
        runDevicesView()
        runFeaturesSwiper()
    }
    if (window.innerWidth >= 720) {
        destroyRestaurantSwiper()
    } else {
        runRestaurantSwiper()
    }
}

const runDesktopView = () => {
    header.classList.add('header--desktop')
}
const runDevicesView = () => {
    header.classList.remove('header--desktop')
}

window.onmousemove = (e) => {
    if (e.clientY <= 100) {
        header.classList.remove('header--hide-on-top')
    }
}

window.onscroll = () => {
    let verticalSizeScrollBar = window.pageYOffset
    if (verticalSizeScrollBar > 99) {
        header.classList.add('header--hide-on-top')
    } else {
        header.classList.remove('header--hide-on-top')
    }
}

const swiperHomeRooms = new Swiper('.home-swiper-rooms', {
    // Optional parameters
    centeredSlides: true,
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 500,
    autoplay: {
        delay: 3000,
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // Breakpoints
    breakpoints: {
        720: {
            slidesPerView: 1.5,
        },
        1000: {
            slidesPerView: 2.1,
        },
        1200: {
            slidesPerView: 2.7,
        },
    },
})

let swiperFeatures
const destroyFeaturesSwiper = () => {
    if (swiperFeatures !== undefined) swiperFeatures.destroy(true, true)
    else runFeaturesSwiper()
}

const runFeaturesSwiper = () => {
    swiperFeatures = new Swiper('.swiper-features', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1,
        // Pagination dots
        pagination: {
            el: ".swiper-pagination",
        },
        // Breakpoints
        breakpoints: {
            720: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            1000: {
                slidesPerView: 3,
                spaceBetween: 20,
            }
        },
    })
}

let swiperRestaurantPhotos
const destroyRestaurantSwiper = () => {
    if (swiperRestaurantPhotos !== undefined) swiperRestaurantPhotos.destroy(true, true)
    else runRestaurantSwiper()
}

const runRestaurantSwiper = () => {
    swiperRestaurantPhotos = new Swiper('.swiper-restaurant-photos', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        // Pagination dots
        pagination: {
            el: ".swiper-pagination",
        },
    })
}

const swiperFoodMenu = new Swiper('.swiper-food-menu', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 1,
    loop: false,
    spaceBetween: 40,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1000: {
            slidesPerView: 2,
            spaceBetween: 50,
        },
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
        renderBullet: (index, className) => {
            return '<span class="' + className + '">' + (index + 1) + "</span>"
        },
    },
    navigation: {
        nextEl: '.swiper-button-next-rooms-cards',
        prevEl: '.swiper-button-prev-rooms-cards',
    },
    // Breakpoints
    breakpoints: {
        1000: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
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
