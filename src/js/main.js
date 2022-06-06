const popup = document.getElementById('popup');
const pop__box = document.getElementById('popup__box');

popup.addEventListener('click', () => {
    console.log('helo')
    pop__box.classList.toggle('popup__open');



}, false);