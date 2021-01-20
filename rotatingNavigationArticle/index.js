const open = document.getElementById('open');
const close = document.getElementById('close');
const nav = document.getElementById('nav');
const container = document.getElementById('contenedor');


open.addEventListener('click', () => {
    console.log('open')
    nav.classList.add('rotateNavigation');
    open.classList.add('active');
    close.classList.remove('active');
    container.classList.add('rotate');
})
close.addEventListener('click', () => {
    console.log('close')
    close.classList.add('active');
    open.classList.remove('active');
    nav.classList.remove('rotateNavigation');
    container.classList.remove('rotate');
})