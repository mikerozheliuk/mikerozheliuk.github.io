const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active')
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active')
});

const counters = document.querySelectorAll('.skills__ratings-counter'), 
      lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML
})  

const btnContainer = document.getElementById("myBtns");
const btns = btnContainer.getElementsByClassName("promo__link");

for (i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      const current = document.getElementsByClassName("btn");
      current[0].className = current[0].className.replace(" btn", "");
      this.className += " btn";
    });
  }