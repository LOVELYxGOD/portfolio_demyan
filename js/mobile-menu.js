const header = document.querySelector('#header');
const burger = header.querySelector('#burger');
const menu = header.querySelector('#menu');

function setStyleMobileMenu(event) {
    const isBurger = event.target.closest('#burger') ;
    const isAnchorLink = event.target.closest('[data-anchor]');
    isBurger.classList.toggle('active')
    menu.classList.toggle('active')
    burger.classList.remove('active');
    menu.classList.remove('active');
    // домашку выполнить ЗДЕСЬ
}

header.addEventListener('click',(event)=> setStyleMobileMenu(event)) 

// 1. Найти и прочитать инфорамацию о дата-атрибутах(js-учебник)
// 2. В html всем якорным сылкам дать дата-атрибут(без значения)
// 3. При клике проверять что элемент содержит дата атрибут(сылка)-закрыть меню