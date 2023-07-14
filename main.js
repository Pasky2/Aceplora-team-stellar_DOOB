//  Counter Section
var section = document.querySelector('.counter-container');
var stat = document.querySelectorAll('.stats .sta');
let start =false;

const startCount = (el) => {
    let max = el.dataset.max;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == max) {
            clearInterval(count);
        }
    }, 2000 / stat);
}

window.onscroll = () => {
    if (window.scrollY >= section.offsetTop) {
        if (!start) {
            stat.forEach ((sta) => startCount(sta));
        }
        start = true;
}
};






var sunIcon = document.getElementById('sunIcon');
var menuIcon = document.getElementById('menuIcon');
var closeIcon = document.getElementById('closeIcon');
var logo = document.getElementById('logo');
var nav = document.querySelector('.nav-bar');



// Toggle between dark and light modes
const switchTheme = () => {
    document.body.classList.toggle('dark-theme');

    document.body.classList.contains('dark-theme') ?
    sunIcon.src = 'assets/vector.svg' :
    sunIcon.src = 'assets/sun-01.svg';

    document.body.classList.contains('dark-theme') ?
    logo.src = 'assets/logo-dark.png' :
    logo.src = 'assets/logo.png';

    document.body.classList.contains('dark-theme') ?
    nav.classList.add('light-mode') :
    nav.classList.add = ('dark-mode');
}

// Hide and show menu icon 
const menu = () => menuIcon.style.display = 'none';

const close = () => menuIcon.style.display = 'block';





menuIcon.addEventListener('click', menu);
closeIcon.addEventListener('click', close);
sunIcon.addEventListener('click', switchTheme);