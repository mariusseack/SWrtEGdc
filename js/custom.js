$(document).ready(function() {
  $(".button-collapse").sideNav();
  $('.collapsible').collapsible();
  $('.tap-target').tapTarget('close');
  $('.parallax').parallax();
});

$(document).scroll(function() {
  var nav = $("nav");

  if ($(this).scrollTop() > 0 && !nav.hasClass("inverse")) {
    nav.removeClass("transparent");
    nav.addClass("scrolled-nav");
    nav.addClass("z-depth-4");
  } else if(!nav.hasClass("inverse")) {
    nav.addClass("transparent");
    nav.removeClass("scrolled-nav");
    nav.removeClass("z-depth-4");
  }
});

$('.carousel.carousel-slider').carousel({
  fullWidth: true
});

//hides the toHide element and shows the toShow element. Easy
function toggleHidness(toHide, toShow){
  if (toHide != "") {
    $(toHide).hide();
  }

  if (toShow != ""){
    if ($(toShow).hasClass("hide")) {
      console.log('i am hidden');
      $(toShow).removeClass("hide");
    }
    else {
      $(toShow).show();
    }
  }
}
