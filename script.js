

const hamburger = document.getElementById('hamburger');
const list = document.getElementById('list');
const overlay = document.getElementById('overlay');
const icon = document.getElementById('icon');
hamburger.addEventListener('click', ()=>{
    list.classList.toggle('navlist-active');
    overlay.classList.toggle('overlay-active');
    icon.classList.toggle('fa-xmark');

})