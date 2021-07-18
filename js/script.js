function hamburger(){
  document.getElementById(`line1`).classList.toggle(`line_1`);
  document.getElementById(`line2`).classList.toggle(`line_2`);
  document.getElementById(`line3`).classList.toggle(`line_3`);
  document.getElementById(`nav`).classList.toggle(`in`);
}

document.getElementById(`hamburger`).addEventListener(`click`,function(){
  hamburger();
});
document.getElementById(`click_open_sub_list_btn1`).addEventListener(`click`,function() {
  document.getElementById(`sub_list_btn1`).classList.toggle(`open_list`);
  document.getElementById(`line5`).classList.toggle(`line_5`);
});
document.getElementById(`click_open_sub_list_btn2`).addEventListener(`click`,function() {
  document.getElementById(`sub_list_btn2`).classList.toggle(`open_list`);
  document.getElementById(`line7`).classList.toggle(`line_7`);
});

var mySwiper = new Swiper('.swiper-container', {
  pagination: '.swiper-pagination',
  paginationClickable: true,
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev',
  loop: true,
  speed: 1000,
  autoplay: {delay: 5000},
  spaceBetween: 10,
  effect: 'coverflow',
});