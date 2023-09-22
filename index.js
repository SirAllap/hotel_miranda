

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

const homeRoomsSliderMobile = document.querySelector('#mobileSlider')
const homeRoomsSliderDesktop = document.querySelector('#desktopSlider')


window.onresize = function () {
    if (window.innerWidth >= 998) {
        runDesktop(true)
        destroyFeaturesSwiper()
    }
    if (window.innerWidth >= 718) {
        destroyRestaurantSwiper()
    }
    if (!window.innerWidth < 718) {
        runRestaurantSwiper()
    }
    if (!window.innerWidth < 998) {
        runFeaturesSwiper()
    }
    if (window.innerWidth <= 1000) {
        runDesktop(false)
    }
}

const runDesktop = (bool) => {
    if (!bool) {
        document.querySelector('.header').style.removeProperty("margin-top")
    } else {
        let verticalSize = window.pageYOffset
        window.onscroll = function () {
            let currentScrollPos = window.pageYOffset
            document.querySelector('.header').style.marginTop = '40px'
            if (verticalSize < currentScrollPos) {
                document.querySelector('.header').style.marginTop = '-150px'
            }
            verticalSize = currentScrollPos
        }
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



// window.onload = function () { destroyFeaturesSwiper() }
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
        spaceBetween: 40,
        // Pagination dots
        pagination: {
            el: ".swiper-pagination",
        },
        // Breakpoints
        breakpoints: {
            720: {
                slidesPerView: 1.5,
            },
            1000: {
                slidesPerView: 2.1,
                spaceBetween: 0,
            },
            1200: {
                slidesPerView: 2.7,
                spaceBetween: 0,
            },
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
    loop: false,
    spaceBetween: 40,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
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



// const breakpoint = window.matchMedia("(min-width:31.25em)")

// // keep track of swiper instances to destroy later
// let mySwiper

// const breakpointChecker = function () { console.log('constantly checking') }

// breakpoint.addListener(breakpointChecker)()

// // kickstart
// breakpointChecker()