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

