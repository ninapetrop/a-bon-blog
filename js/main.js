// Menu Function Variables
var open = $(".toggle__btn");
var menu = $(".menu__container")
var overlay = $(".overlay");

// Menu Open Function
open.click(function() {
  overlay.toggle();
  menu.toggleClass("open");
});

// Menu Close Function
overlay.click(function() {
  overlay.toggle();
  menu.toggleClass("open");
});

// Return-to-top Function
$(function () {
  // Retern-to-top Function Variables
  var offset = $('.ingredients__container').offset().top,
      duration = 500,
      top_section = $('#to__top__button__container'),
      toTopButton = $('#to__top__button');

  $(window).scroll(function () {
    if( $(this).scrollTop() > offset ) {
      $(top_section).fadeIn(duration);
    } else{
      $(top_section).fadeOut(duration);
    }});

  // on click, send user to defined position. define that position here
  $(toTopButton).click(function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop:  $('.post__body').offset().top
    }, 0);
  });
});
