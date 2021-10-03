const toggle = document.querySelector('#header-toggle')
const nav = document.querySelector('.nav')


toggle.addEventListener('click' , ()=> {
    nav.classList.toggle('show__menu')
    toggle.classList.toggle('bx-x')
})


// active Menu //

const navLink = document.querySelectorAll('.nav__link')

let linkAction = (n) => {
    navLink.forEach(element => element.classList.remove('active'))
    n.classList.add('active')
}

navLink.forEach(n => {
    n.addEventListener('click',linkAction(n))
})

