var open = $(".toggle__btn");
var menu = $(".menu__container")
var overlay = $(".overlay");

open.click(function() {
  overlay.toggle();
  menu.toggleClass("open");
});

overlay.click(function() {
  overlay.toggle();
  menu.toggleClass("open");
});
