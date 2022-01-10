document.querySelector('#theme-button').addEventListener('click', ()=> {
  document.querySelector('body').classList.toggle('dark-theme');
});

document.querySelector('.bx-menu').addEventListener('click', ()=> {
  document.querySelector('.nav__menu').classList.toggle('show-menu');
});

const link = document.querySelectorAll('.nav__link');

link.forEach(element => {
  element.addEventListener('click', ()=> {
    removeClass();
    element.classList.add('active-link');
    document.querySelector('.nav__menu').classList.remove('show-menu');
  })
});

function removeClass() {
  link.forEach(element => {
    element.classList.remove('active-link');
  });
}


const sections = document.querySelectorAll(".bd-container");
const navLi = document.querySelectorAll(".nav__item");
window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id"); }
  });

  navLi.forEach((li) => {
    li.classList.remove("active-link");
    if (li.classList.contains(current)) {
      li.classList.add("active-link");
    }
  });
};