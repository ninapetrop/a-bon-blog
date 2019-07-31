// Function Variables
var open = $(".toggle__btn");
var menu = $(".menu__container");
var overlay = $(".overlay");
var search = $("#search__button");
var searchForm = $("#search__form");
var main = $(".main");

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

// Search Form Functions
search.click(function () {
  $('#nav__title').toggle();
  $('.search__container').toggleClass("open");
  searchForm.toggle();
  $('#search_box').focus();
});

main.click(function () {
  if( $('.search__container').hasClass("open")) {
    $('#nav__title').toggle();
    $('.search__container').toggleClass("open");
    searchForm.toggle();
    $('#search_box').focus();
  }
});
