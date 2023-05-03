$(document).ready(function(){
    $('.Destination__Container__Right__Image').carousel({
            padding: 200
    });
    // autoplay();
    // function autoplay() {
    // 	$('.carousel').carousel('next');
    // 	setTimeout(autoplay, 4500);
    // }
  });
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
    navigation: {
      nextEl: '.Select-btn-Next',
      prevEl: '.Select-btn-Prevert',
    },
    // Enable debugger
    debugger: true,
  });