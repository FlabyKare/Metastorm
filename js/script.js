
//! Плавная прогрузка Элементов

function onEntry(entry) {
    entry.forEach((change) => {
       if (change.isIntersecting) {
          change.target.classList.add("element-show");
       }
    });
 }
 
 let options = {
    threshold: [0.5],
 };
 let observer = new IntersectionObserver(onEntry, options);
 let elements = document.querySelectorAll(".element-animation");
 
 for (let elm of elements) {
    observer.observe(elm);
 }
 


$(".slider_box_wrapper").slick({
   infinite: true,
   slidesToShow: 3,
   slidesToScroll: 1,
   arrows: true,
   dots: true,
   responsive: [
      {
         breakpoint: 768,
         settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
         },
      },
      {
         breakpoint: 576,
         settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
         },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
   ],
});

$(".slider_gun_wrapper").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
 });
 $(".mobile_slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
 });
 $(".desktop_slider_none").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
 });

var swiper = new Swiper(".mySwiper", {
   loop: false,
   spaceBetween: 10,
   slidesPerView: 9,
   freeMode: true,
   watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
   loop: true,
   spaceBetween: 10,
   slidesPerView: 1,
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
   thumbs: {
      swiper: swiper,
   },
});


