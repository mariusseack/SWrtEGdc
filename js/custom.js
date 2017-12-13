var nav = $("nav");
var ph_container = $('.parallax-container .heading-container');
var para_element = ph_container.children();
var ele_offset = para_element.offset().top - para_element.height();
var puffer = 130;    //amount (in pixel) of puffer the element can scroll above top
var max_offset = ele_offset + puffer;

$(document).ready(function() {
  $(".button-collapse").sideNav();
  $('.collapsible').collapsible();
  $('.tap-target').tapTarget('close');
  $('.parallax').parallax();
});

$(document).scroll(function() {
  if ($(this).scrollTop() > 0 && !nav.hasClass("inverse")) {
    nav.removeClass("transparent");
    nav.addClass("scrolled-nav");
    nav.addClass("z-depth-4");
  } else if (!nav.hasClass("inverse")) {
    nav.addClass("transparent");
    nav.removeClass("scrolled-nav");
    nav.removeClass("z-depth-4");
  }

  //parallax custom scrolleffect
  var scroll_offset = $(window).scrollTop();
  var val = (max_offset - scroll_offset);
  var res = Math.round((val/max_offset) * 100) / 100;

  if(res >= 0){
    para_element.css({"opacity": res});
  }

  console.log(para_element.css('top'));

});

$('.carousel.carousel-slider').carousel({
  fullWidth: true
});

//hides the toHide element and shows the toShow element. Easy
function toggleHidness(toHide, toShow) {
  if (toHide != "") {
    $(toHide).hide();
  }

  if (toShow != "") {
    if ($(toShow).hasClass("hide")) {
      console.log('i am hidden');
      $(toShow).removeClass("hide");
    } else {
      $(toShow).show();
    }
  }
}
