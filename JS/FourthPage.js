
/* ========
Debugger plugin, simple demo plugin to console.log some of callbacks
======== */
function myPlugin({ swiper, extendParams, on }) {
  extendParams({
    debugger: false,
  });

  on('init', () => {
    if (!swiper.params.debugger) return;
  });
  on('click', (swiper, e) => {
    if (!swiper.params.debugger) return;
  });
  on('tap', (swiper, e) => {
    if (!swiper.params.debugger) return;
  });
  on('doubleTap', (swiper, e) => {
    if (!swiper.params.debugger) return;
  });
  on('sliderMove', (swiper, e) => {
    if (!swiper.params.debugger) return;
  });
  on('slideChange', () => {
    if (!swiper.params.debugger) return;
  });
  on('slideChangeTransitionStart', () => {
    if (!swiper.params.debugger) return;
  });
  on('slideChangeTransitionEnd', () => {
    if (!swiper.params.debugger) return;
  });
  on('transitionStart', () => {
    if (!swiper.params.debugger) return;
  });
  on('transitionEnd', () => {
    if (!swiper.params.debugger) return;
  });
  on('fromEdge', () => {
    if (!swiper.params.debugger) return;
  });
  on('reachBeginning', () => {
    if (!swiper.params.debugger) return;
  });
  on('reachEnd', () => {
    if (!swiper.params.debugger) return;
  });
}

// Init Swiper
var swiper = new Swiper('.swiper', {
  // Install Plugin To Swiper
  modules: [myPlugin],
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },
  // Enable debugger
  debugger: true,
});
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}