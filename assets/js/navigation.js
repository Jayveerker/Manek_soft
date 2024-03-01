$("#mobile-button").click(function () {
  if ($("#mobile-menu").hasClass("active")) {
    $("#mobile-menu").removeClass("active");
    $("body").removeClass("overflow_body");
  } else {
    $("nav").toggleClass("active");
    $(".mobile-menu").toggleClass("active");
    $("body").toggleClass("overflow_body");
  }
});
const mobil_icon = document.getElementById("mobile-button");
const mobil_menu = document.getElementById("mobile-menu");
const hamburger_icon = document.getElementById("#mobile-button i");

function changeIcon(icon) {
  icon.classList.toggle("fa-xmark");
}
