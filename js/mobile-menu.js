const header = document.querySelector('#header');
const burger = header.querySelector('#burger');
const menu = header.querySelector('#menu');

function setStyleMobileMenu(event) {
    const isBurger = event.target.closest('#burger') ;
    const isAnchorLink = event.target.closest('[data-anchor]');
    
    if (isBurger) {
        isBurger.classList.toggle('active');
        menu.classList.toggle('active');
    }
    
    if (isAnchorLink) {
        burger.classList.remove('active');
        menu.classList.remove('active');
    }
}

header.addEventListener('click',(event)=> setStyleMobileMenu(event)) 
